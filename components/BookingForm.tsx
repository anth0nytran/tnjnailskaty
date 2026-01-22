import React, { useState } from 'react';
import { Phone, Calendar, User, Mail, Star, Clock, AlertCircle } from 'lucide-react';
import { MENU_DATA } from '../menuData';
import { BUSINESS_INFO } from '../constants';
import { 
  validateForm, 
  sanitizeFormData, 
  validateName, 
  validatePhone, 
  validateEmail, 
  validateDate, 
  validateTime,
  validateUrl,
  sanitizeString,
  formatPhone
} from '../utils/validation';

interface BookingFormProps {
  onSuccess?: () => void;
  showServiceSelection?: boolean;
}

const BookingForm: React.FC<BookingFormProps> = ({ onSuccess, showServiceSelection = true }) => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [selectedServices, setSelectedServices] = useState<Record<string, string[]>>({});
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('');
  
  // Form field values
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [additionalNotes, setAdditionalNotes] = useState<string>('');
  const [selectedService, setSelectedService] = useState<string>('');
  
  // Security: Honeypot field (bots will fill this, humans won't see it)
  const [honeypot, setHoneypot] = useState<string>('');
  
  // Security: Track form start time for bot detection
  const [formStartTime] = useState<number>(Date.now());
  
  // Security: Track submission attempts
  const [submissionAttempts, setSubmissionAttempts] = useState<number>(0);
  const [lastSubmissionTime, setLastSubmissionTime] = useState<number>(0);
  
  // Error states
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleServiceToggle = (category: string, serviceName: string) => {
    const sanitizedCategory = sanitizeString(category, 100);
    const sanitizedService = sanitizeString(serviceName, 200);
    
    setSelectedServices(prev => {
      const categoryServices = prev[sanitizedCategory] || [];
      const isSelected = categoryServices.includes(sanitizedService);
      return {
        ...prev,
        [sanitizedCategory]: isSelected
          ? categoryServices.filter(s => s !== sanitizedService)
          : [...categoryServices, sanitizedService]
      };
    });
    
    // Clear service selection error when user selects a service
    if (errors.selectedServices) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.selectedServices;
        return newErrors;
      });
    }
  };

  const handleFieldChange = (field: string, value: string) => {
    switch (field) {
      case 'fullName':
        setFullName(value);
        if (touched.fullName) {
          const validation = validateName(value);
          setErrors(prev => ({
            ...prev,
            fullName: validation.isValid ? '' : (validation.error || '')
          }));
        }
        break;
      case 'phone':
        setPhone(value);
        if (touched.phone) {
          const validation = validatePhone(value);
          setErrors(prev => ({
            ...prev,
            phone: validation.isValid ? '' : (validation.error || '')
          }));
        }
        break;
      case 'email':
        setEmail(value);
        if (touched.email) {
          const validation = validateEmail(value);
          setErrors(prev => ({
            ...prev,
            email: validation.isValid ? '' : (validation.error || '')
          }));
        }
        break;
      case 'additionalNotes':
        // Just limit length, don't interfere with typing
        if (value.length > 1000) {
          return; // Don't update if over limit
        }
        setAdditionalNotes(value);
        if (touched.additionalNotes && value.length > 1000) {
          setErrors(prev => ({
            ...prev,
            additionalNotes: 'Notes must be less than 1000 characters'
          }));
        } else if (touched.additionalNotes) {
          setErrors(prev => ({
            ...prev,
            additionalNotes: ''
          }));
        }
        break;
      case 'selectedService':
        setSelectedService(value);
        break;
    }
  };

  const handleFieldBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    
    switch (field) {
      case 'fullName':
        const nameValidation = validateName(fullName);
        setErrors(prev => ({
          ...prev,
          fullName: nameValidation.isValid ? '' : (nameValidation.error || '')
        }));
        break;
      case 'phone':
        const phoneValidation = validatePhone(phone);
        setErrors(prev => ({
          ...prev,
          phone: phoneValidation.isValid ? '' : (phoneValidation.error || '')
        }));
        break;
      case 'email':
        const emailValidation = validateEmail(email);
        setErrors(prev => ({
          ...prev,
          email: emailValidation.isValid ? '' : (emailValidation.error || '')
        }));
        break;
      case 'selectedDate':
        const dateValidation = validateDate(selectedDate);
        setErrors(prev => ({
          ...prev,
          selectedDate: dateValidation.isValid ? '' : (dateValidation.error || '')
        }));
        break;
      case 'selectedTime':
        const timeValidation = validateTime(selectedTime, selectedDate);
        setErrors(prev => ({
          ...prev,
          selectedTime: timeValidation.isValid ? '' : (timeValidation.error || '')
        }));
        break;
    }
  };

  const handleDateChange = (value: string) => {
    setSelectedDate(value);
    // Clear time when date changes
    if (selectedTime) {
      setSelectedTime('');
    }
    // Validate date
    if (touched.selectedDate || value) {
      const validation = validateDate(value);
      setErrors(prev => ({
        ...prev,
        selectedDate: validation.isValid ? '' : (validation.error || ''),
        selectedTime: value ? prev.selectedTime : 'Please select a date first'
      }));
    }
  };

  const handleTimeChange = (value: string) => {
    setSelectedTime(value);
    if (touched.selectedTime || value) {
      const validation = validateTime(value, selectedDate);
      setErrors(prev => ({
        ...prev,
        selectedTime: validation.isValid ? '' : (validation.error || '')
      }));
    }
  };

  const handleBookingSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Security: Check honeypot field (bots will fill this)
    if (honeypot && honeypot.trim() !== '') {
      // Bot detected - silently fail
      console.warn('Bot detected via honeypot field');
      return;
    }
    
    // Security: Rate limiting - prevent spam submissions
    const now = Date.now();
    const timeSinceLastSubmission = now - lastSubmissionTime;
    const MIN_SUBMISSION_INTERVAL = 5000; // 5 seconds between submissions
    
    if (timeSinceLastSubmission < MIN_SUBMISSION_INTERVAL) {
      setErrors({ 
        submit: 'Please wait a moment before submitting again.' 
      });
      return;
    }
    
    // Security: Check for too many rapid submissions
    if (submissionAttempts > 5) {
      setErrors({ 
        submit: 'Too many submission attempts. Please try again later.' 
      });
      return;
    }
    
    // Security: Bot detection - form filled too quickly (less than 3 seconds)
    const formFillTime = now - formStartTime;
    const MIN_FORM_FILL_TIME = 3000; // 3 seconds minimum
    
    if (formFillTime < MIN_FORM_FILL_TIME) {
      console.warn('Suspicious: Form filled too quickly');
      // Don't block, but log for monitoring
    }
    
    // Mark all fields as touched
    const allTouched = {
      fullName: true,
      phone: true,
      email: true,
      selectedDate: true,
      selectedTime: true,
      additionalNotes: true,
    };
    setTouched(allTouched);
    
    // Validate entire form
    const formData = {
      fullName,
      phone,
      email,
      selectedDate,
      selectedTime,
      selectedServices: showServiceSelection ? selectedServices : {},
      additionalNotes,
      requireServices: showServiceSelection,
    };
    
    const validation = validateForm(formData);
    
    if (!validation.isValid) {
      setErrors(validation.errors);
      // Scroll to first error
      const firstErrorField = Object.keys(validation.errors)[0];
      const errorElement = document.querySelector(`[data-field="${firstErrorField}"]`);
      if (errorElement) {
        errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }
    
    setFormStatus('submitting');
    setErrors({});
    
    try {
      // Get access key from environment
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
      
      // Debug in development
      if (import.meta.env.DEV) {
        console.log('Access key check:', {
          exists: !!accessKey,
          length: accessKey?.length || 0,
          preview: accessKey ? `${accessKey.substring(0, 8)}...` : 'NOT FOUND'
        });
      }
      
      if (!accessKey || accessKey.trim() === '') {
        throw new Error('Web3Forms access key is not configured. Please check your .env file and restart the dev server.');
      }
      
      // Format services for email
      let servicesText = '';
      if (showServiceSelection) {
        const servicesList: string[] = [];
        for (const [category, services] of Object.entries(selectedServices)) {
          const serviceArray = services as string[];
          if (serviceArray && serviceArray.length > 0) {
            servicesList.push(`${category}: ${serviceArray.join(', ')}`);
          }
        }
        servicesText = servicesList.join('\n');
      } else if (selectedService) {
        servicesText = selectedService;
      }
      
      // Format date
      const selectedDateObj = new Date(
        parseInt(selectedDate.split('-')[0]),
        parseInt(selectedDate.split('-')[1]) - 1,
        parseInt(selectedDate.split('-')[2])
      );
      const formattedDate = selectedDateObj.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      
      // Create FormData from the form (like Web3Forms example)
      const formDataObj = new FormData(e.currentTarget);
      
      // Add access key
      formDataObj.append('access_key', accessKey);
      
      // Add subject line
      formDataObj.append('subject', `New Appointment Request from ${fullName}`);
      
      // Build complete message with all booking details
      const messageBody = `Appointment Request Details:

Name: ${fullName}
Email: ${email}
Phone: ${phone}

Preferred Date: ${formattedDate}
Preferred Time: ${selectedTime}

${showServiceSelection ? 'Selected Services:' : 'Service:'}
${servicesText || 'Not specified'}

${additionalNotes ? `Additional Notes:\n${additionalNotes}` : 'No additional notes provided.'}

---
Submitted via T&J Nails website booking form.`;

      // Add all the data - Web3Forms will include everything in the email
      formDataObj.append('message', messageBody);
      formDataObj.append('preferred_date', formattedDate);
      formDataObj.append('preferred_time', selectedTime);
      formDataObj.append('services', servicesText || 'Not specified');
      
      // Send to Web3Forms
      const web3FormsResponse = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataObj
      });
      
      const web3FormsData = await web3FormsResponse.json();
      
      // Also send to n8n webhook for text messages
      const n8nWebhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL;
      
      // Security: Validate webhook URL to prevent SSRF attacks
      if (n8nWebhookUrl) {
        const urlValidation = validateUrl(n8nWebhookUrl);
        if (!urlValidation.isValid) {
          console.error('Invalid webhook URL:', urlValidation.error);
          // Don't send to invalid webhook, but don't fail the form
        } else {
        const n8nPayload = {
          fullName,
          email,
          phone,
          preferredDate: formattedDate,
          preferredTime: selectedTime,
          services: servicesText || 'Not specified',
          additionalNotes: additionalNotes || 'None',
          submittedAt: new Date().toISOString()
        };
        
        try {
          await fetch(n8nWebhookUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(n8nPayload)
          });
        } catch (n8nError) {
          // Don't fail the form if n8n webhook fails, just log it
          console.warn('n8n webhook error (non-critical):', n8nError);
        }
        }
      }
      
      // Security: Update submission tracking
      setSubmissionAttempts(prev => prev + 1);
      setLastSubmissionTime(Date.now());
      
      if (web3FormsData.success) {
        setFormStatus('success');
        if (onSuccess) onSuccess();
      } else {
        console.log('Error', web3FormsData);
        setErrors({ submit: web3FormsData.message || 'Form submission failed' });
        setFormStatus('idle');
      }
    } catch (error: any) {
      console.error('Form submission error:', error);
      setFormStatus('idle');
      setErrors({ 
        submit: error?.message || 'Unable to submit your request. Please call us directly at (281) 391-1411 or try again later.'
      });
    }
  };

  const getSelectedCount = () => {
    return Object.values(selectedServices).flat().length;
  };

  // Generate available dates (next 14 days, excluding Sundays)
  // Uses local timezone to ensure accurate "Today" and "Tomorrow" labels
  const getAvailableDates = () => {
    const dates: { value: string; label: string }[] = [];
    // Get current date in local timezone (Texas Central Time)
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    
    let daysAdded = 0;
    let currentDate = new Date(today);
    
    // Generate next 14 available days (excluding Sundays)
    while (dates.length < 14 && daysAdded < 30) {
      const dayOfWeek = currentDate.getDay();
      
      // Skip Sundays (0)
      if (dayOfWeek !== 0) {
        // Format date as YYYY-MM-DD in local timezone
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');
        const dateStr = `${year}-${month}-${day}`;
        
        const dayName = currentDate.toLocaleDateString('en-US', { weekday: 'short' });
        const monthDay = currentDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        
        // Check if this is today or tomorrow
        const daysDiff = Math.floor((currentDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
        
        if (daysDiff === 0) {
          dates.push({ value: dateStr, label: `Today (${monthDay})` });
        } else if (daysDiff === 1) {
          dates.push({ value: dateStr, label: `Tomorrow (${monthDay})` });
        } else {
          dates.push({ value: dateStr, label: `${dayName}, ${monthDay}` });
        }
      }
      
      // Move to next day
      currentDate.setDate(currentDate.getDate() + 1);
      daysAdded++;
    }
    
    return dates;
  };

  // Generate time slots (9AM - 7PM, every 30 minutes)
  const getTimeSlots = () => {
    const slots: string[] = [];
    for (let hour = 9; hour < 19; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const timeStr = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        // Generate consistent time format: "9:00 AM", "9:30 AM", "6:00 PM", etc.
        const date = new Date(`2000-01-01T${timeStr}`);
        const displayTime = date.toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          hour12: true
        });
        // Ensure consistent format with space before AM/PM
        slots.push(displayTime.trim());
      }
    }
    return slots;
  };

  // Use state for dates to ensure they update dynamically
  const [availableDates, setAvailableDates] = React.useState(() => getAvailableDates());
  const timeSlots = getTimeSlots();

  // Update dates dynamically - refreshes when day changes
  React.useEffect(() => {
    // Update dates immediately on mount
    setAvailableDates(getAvailableDates());
    
    const updateDates = () => {
      setAvailableDates(getAvailableDates());
    };
    
    // Update dates every hour to catch day changes
    const hourlyInterval = setInterval(updateDates, 60 * 60 * 1000);
    
    // Also schedule an update at midnight to refresh "Today" and "Tomorrow" labels
    const now = new Date();
    const msUntilMidnight = 
      (24 - now.getHours()) * 60 * 60 * 1000 - 
      now.getMinutes() * 60 * 1000 - 
      now.getSeconds() * 1000 - 
      now.getMilliseconds();
    
    let midnightInterval: NodeJS.Timeout | null = null;
    const midnightTimeout = setTimeout(() => {
      updateDates();
      // After midnight, continue hourly updates
      midnightInterval = setInterval(updateDates, 60 * 60 * 1000);
    }, msUntilMidnight);
    
    return () => {
      clearInterval(hourlyInterval);
      clearTimeout(midnightTimeout);
      if (midnightInterval) {
        clearInterval(midnightInterval);
      }
    };
  }, []);

  // Set default active category
  React.useEffect(() => {
    if (showServiceSelection && MENU_DATA.menu.length > 0 && !activeCategory) {
      setActiveCategory(MENU_DATA.menu[0].section);
    }
  }, [showServiceSelection, activeCategory]);

  return (
    <>
      {formStatus === 'success' ? (
        <div className="h-full flex flex-col justify-center items-center text-center py-12">
          <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-5">
            <Star size={28} className="text-green-600 fill-green-600" />
          </div>
          <h3 className="text-2xl font-medium text-neutral-900 mb-3 tracking-tight">You're All Set!</h3>
          <p className="text-stone-600 mb-6 text-sm">
            Jenny or Tony will call you shortly to confirm your appointment and discuss pricing.
          </p>
          
          {showServiceSelection && getSelectedCount() > 0 && (
            <div className="w-full mb-5 p-4 bg-stone-50 border border-stone-200 rounded-lg text-left">
              <p className="text-xs font-medium text-stone-700 uppercase tracking-wider mb-2">Selected Services</p>
              <div className="space-y-1">
                {Object.entries(selectedServices).map(([category, services]) => {
                  const serviceList: string[] = Array.isArray(services) ? services : [];
                  if (serviceList.length === 0) return null;
                  return (
                    <div key={category}>
                      <p className="text-xs text-stone-600 font-medium mb-1">{category}:</p>
                      <ul className="text-xs text-stone-500 space-y-0.5 pl-2">
                        {serviceList.map((service, idx) => (
                          <li key={idx}>• {service}</li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <div className="p-4 bg-gold-50 border border-gold-200 rounded-lg mb-5 text-left w-full">
            <p className="text-gold-800 font-bold uppercase tracking-widest text-[10px] mb-1">What's Next</p>
            <p className="text-stone-800 text-sm">
              We'll call you shortly to confirm your appointment time and discuss your service preferences. 
              <span className="font-medium"> Your appointment is reserved.</span>
            </p>
          </div>
          <button 
            onClick={() => {
              setFormStatus('idle');
              setSelectedServices({});
              setSelectedDate('');
              setSelectedTime('');
              setFullName('');
              setPhone('');
              setEmail('');
              setAdditionalNotes('');
              setSelectedService('');
              setErrors({});
              setTouched({});
            }} 
            className="text-stone-400 underline hover:text-gold-600 text-sm"
          >
            Book another appointment
          </button>
        </div>
      ) : (
        <form onSubmit={handleBookingSubmit} className="space-y-6" noValidate name="booking-form">
          {errors.submit && (
            <div className="p-3 bg-red-50 border border-red-200 rounded flex items-start gap-2">
              <AlertCircle size={16} className="text-red-600 shrink-0 mt-0.5" />
              <p className="text-red-800 text-sm">{errors.submit}</p>
            </div>
          )}

          {/* Personal Info */}
          <div className="space-y-4 pb-4 border-b border-stone-200">
            <div data-field="fullName">
              <label className="block text-[10px] uppercase tracking-wider text-stone-500 mb-1.5">
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3 text-stone-400" size={14} />
                <input 
                  type="text" 
                  required 
                  value={fullName}
                  onChange={(e) => handleFieldChange('fullName', e.target.value)}
                  onBlur={() => handleFieldBlur('fullName')}
                  className={`w-full bg-stone-50 border p-2.5 pl-9 text-stone-800 text-sm focus:outline-none transition-colors ${
                    errors.fullName 
                      ? 'border-red-500 focus:border-red-500' 
                      : 'border-stone-200 focus:border-gold-500'
                  }`}
                  placeholder="Jane Doe"
                  maxLength={100}
                  autoComplete="name"
                />
              </div>
              {errors.fullName && (
                <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle size={12} />
                  {errors.fullName}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div data-field="phone">
                <label className="block text-[10px] uppercase tracking-wider text-stone-500 mb-1.5">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 text-stone-400" size={14} />
                  <input 
                    type="tel" 
                    name="phone"
                    required 
                    value={phone}
                    onChange={(e) => handleFieldChange('phone', e.target.value)}
                    onBlur={() => handleFieldBlur('phone')}
                    className={`w-full bg-stone-50 border p-2.5 pl-9 text-stone-800 text-sm focus:outline-none transition-colors ${
                      errors.phone 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-stone-200 focus:border-gold-500'
                    }`}
                    placeholder="(281) 555-0123"
                    maxLength={20}
                    autoComplete="tel"
                  />
                </div>
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle size={12} />
                    {errors.phone}
                  </p>
                )}
              </div>

              <div data-field="email">
                <label className="block text-[10px] uppercase tracking-wider text-stone-500 mb-1.5">
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 text-stone-400" size={14} />
                  <input 
                    type="email" 
                    name="email"
                    required 
                    value={email}
                    onChange={(e) => handleFieldChange('email', e.target.value)}
                    onBlur={() => handleFieldBlur('email')}
                    className={`w-full bg-stone-50 border p-2.5 pl-9 text-stone-800 text-sm focus:outline-none transition-colors ${
                      errors.email 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-stone-200 focus:border-gold-500'
                    }`}
                    placeholder="jane@example.com"
                    maxLength={254}
                    autoComplete="email"
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle size={12} />
                    {errors.email}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Date & Time Selection */}
          <div className="space-y-4 pb-4 border-b border-stone-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div data-field="selectedDate">
                <label className="block text-[10px] uppercase tracking-wider text-stone-500 mb-1.5">
                  Preferred Date <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 text-stone-400" size={14} />
                  <select 
                    required
                    value={selectedDate}
                    onChange={(e) => handleDateChange(e.target.value)}
                    onBlur={() => handleFieldBlur('selectedDate')}
                    className={`w-full bg-stone-50 border p-2.5 pl-9 text-stone-800 text-sm focus:outline-none transition-colors appearance-none ${
                      errors.selectedDate 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-stone-200 focus:border-gold-500'
                    }`}
                  >
                    <option value="">Select date...</option>
                    {availableDates.map((date) => (
                      <option key={date.value} value={date.value}>
                        {date.label}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.selectedDate && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle size={12} />
                    {errors.selectedDate}
                  </p>
                )}
              </div>

              <div data-field="selectedTime">
                <label className="block text-[10px] uppercase tracking-wider text-stone-500 mb-1.5">
                  Preferred Time <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-3 text-stone-400" size={14} />
                  <select 
                    required
                    value={selectedTime}
                    onChange={(e) => handleTimeChange(e.target.value)}
                    onBlur={() => handleFieldBlur('selectedTime')}
                    disabled={!selectedDate}
                    className={`w-full bg-stone-50 border p-2.5 pl-9 text-stone-800 text-sm focus:outline-none transition-colors appearance-none ${
                      errors.selectedTime 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-stone-200 focus:border-gold-500'
                    } ${!selectedDate ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <option value="">Select time...</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.selectedTime && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle size={12} />
                    {errors.selectedTime}
                  </p>
                )}
                {!selectedDate && !errors.selectedTime && (
                  <p className="text-[9px] text-stone-400 mt-1">Select a date first</p>
                )}
              </div>
            </div>
            <p className="text-[9px] text-stone-400">
              We're closed Sundays. Hours: Mon–Sat 9AM–7PM
            </p>
          </div>

          {/* Service Selection */}
          {showServiceSelection ? (
            <div className="space-y-4 pb-4 border-b border-stone-200" data-field="selectedServices">
              <div>
                <label className="block text-[10px] uppercase tracking-wider text-stone-500 mb-3">
                  What would you like? <span className="text-red-500">*</span> <span className="text-stone-400 normal-case font-normal">(Select all that apply)</span>
                </label>
                
                {/* Category Tabs */}
                <div className="flex flex-wrap gap-2 mb-4 border-b border-stone-200 pb-3">
                  {MENU_DATA.menu.map((section) => (
                    <button
                      key={section.section}
                      type="button"
                      onClick={() => setActiveCategory(section.section)}
                      className={`px-3 py-1.5 text-xs font-medium transition-colors ${
                        activeCategory === section.section
                          ? 'bg-gold-600 text-white'
                          : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                      }`}
                    >
                      {section.section}
                    </button>
                  ))}
                </div>

                {/* Services for Active Category */}
                <div className="max-h-[200px] overflow-y-auto pr-2 space-y-1.5">
                  {MENU_DATA.menu
                    .filter(section => section.section === activeCategory)
                    .map((section) => (
                      <div key={section.section} className="space-y-1.5">
                        {section.items.map((item, idx) => {
                          const sanitizedService = sanitizeString(item.name, 200);
                          const isSelected = selectedServices[section.section]?.includes(sanitizedService) || false;
                          return (
                            <label
                              key={idx}
                              className="flex items-start gap-2.5 p-2 rounded hover:bg-stone-50 cursor-pointer transition-colors"
                            >
                              <input
                                type="checkbox"
                                checked={isSelected}
                                onChange={() => handleServiceToggle(section.section, item.name)}
                                className="mt-0.5 w-4 h-4 text-gold-600 border-stone-300 rounded focus:ring-gold-500 focus:ring-1"
                              />
                              <div className="flex-1 min-w-0">
                                <span className="text-sm text-stone-800 font-light">{item.name}</span>
                              </div>
                            </label>
                          );
                        })}
                        {section.extras && section.extras.map((extra, extraIdx) => {
                          const sanitizedExtra = sanitizeString(extra.name, 200);
                          const isSelected = selectedServices[section.section]?.includes(sanitizedExtra) || false;
                          return (
                            <label
                              key={`extra-${extraIdx}`}
                              className="flex items-start gap-2.5 p-2 rounded hover:bg-stone-50 cursor-pointer transition-colors pl-4"
                            >
                              <input
                                type="checkbox"
                                checked={isSelected}
                                onChange={() => handleServiceToggle(section.section, extra.name)}
                                className="mt-0.5 w-4 h-4 text-gold-600 border-stone-300 rounded focus:ring-gold-500 focus:ring-1"
                              />
                              <div className="flex-1 min-w-0">
                                <span className="text-xs text-stone-600 font-light italic">{extra.name}</span>
                              </div>
                            </label>
                          );
                        })}
                      </div>
                    ))}
                </div>
                
                {errors.selectedServices && (
                  <p className="mt-2 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle size={12} />
                    {errors.selectedServices}
                  </p>
                )}
                {getSelectedCount() > 0 && !errors.selectedServices && (
                  <p className="mt-2 text-xs text-stone-500">
                    {getSelectedCount()} service{getSelectedCount() > 1 ? 's' : ''} selected
                  </p>
                )}
              </div>
            </div>
          ) : (
            <div className="pb-4 border-b border-stone-200" data-field="selectedService">
              <label className="block text-[10px] uppercase tracking-wider text-stone-500 mb-1.5">
                Service <span className="text-red-500">*</span>
              </label>
              <select 
                required
                value={selectedService}
                onChange={(e) => handleFieldChange('selectedService', e.target.value)}
                className={`w-full bg-stone-50 border p-2.5 text-stone-800 text-sm focus:outline-none transition-colors appearance-none ${
                  errors.selectedService 
                    ? 'border-red-500 focus:border-red-500' 
                    : 'border-stone-200 focus:border-gold-500'
                }`}
              >
                <option value="">Select a service...</option>
                {MENU_DATA.menu.flatMap(section => 
                  section.items.map((item, idx) => (
                    <option key={`${section.section}-${idx}`} value={item.name}>
                      {item.name}
                    </option>
                  ))
                )}
              </select>
              {errors.selectedService && (
                <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle size={12} />
                  {errors.selectedService}
                </p>
              )}
            </div>
          )}

          {/* Pricing Note */}
          <div className="p-3 bg-gold-50 border border-gold-200 rounded">
            <p className="text-xs text-stone-700">
              {showServiceSelection ? (
                <>
                  <span className="font-medium">Note:</span> Pricing will be confirmed when we call to finalize your appointment. 
                  We'll work with you to create the perfect service package.
                </>
              ) : (
                <>
                  We'll call you to confirm your appointment time and discuss your service details.
                </>
              )}
            </p>
          </div>

          {/* Additional Notes */}
          <div data-field="additionalNotes">
            <label className="block text-[10px] uppercase tracking-wider text-stone-500 mb-1.5">
              Additional Notes <span className="text-stone-400 normal-case font-normal">(Optional)</span>
            </label>
            <textarea 
              name="message"
              value={additionalNotes}
              onChange={(e) => handleFieldChange('additionalNotes', e.target.value)}
              onBlur={() => handleFieldBlur('additionalNotes')}
              className={`w-full bg-stone-50 border p-2.5 text-stone-800 text-sm focus:outline-none transition-colors h-20 resize-none ${
                errors.additionalNotes 
                  ? 'border-red-500 focus:border-red-500' 
                  : 'border-stone-200 focus:border-gold-500'
              }`}
              placeholder="Any special requests, nail length preferences, design ideas, etc..."
              maxLength={1000}
            />
            <div className="flex items-center justify-between mt-1">
              {errors.additionalNotes && (
                <p className="text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle size={12} />
                  {errors.additionalNotes}
                </p>
              )}
              <p className="text-[9px] text-stone-400 ml-auto">
                {additionalNotes.length}/1000 characters
              </p>
            </div>
          </div>

          {/* Security: Honeypot field - hidden from users, bots will fill it */}
          <div style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }} aria-hidden="true">
            <label htmlFor="website-url">Website URL (leave blank)</label>
            <input
              type="text"
              id="website-url"
              name="website-url"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>
          
          <button 
            type="submit" 
            disabled={formStatus === 'submitting' || (showServiceSelection && getSelectedCount() === 0)}
            className="w-full py-3 bg-black text-white text-[10px] font-bold tracking-[0.25em] uppercase hover:bg-gold-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {formStatus === 'submitting' ? 'Processing...' : 'Request Appointment'}
          </button>
          <p className="text-[9px] text-stone-400 text-center">
            No payment required. We'll call you to confirm details and pricing.
          </p>
        </form>
      )}
    </>
  );
};

export default BookingForm;

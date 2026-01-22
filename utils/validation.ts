// Validation and sanitization utilities

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export interface SanitizedFormData {
  fullName: string;
  phone: string;
  email: string;
  selectedDate: string;
  selectedTime: string;
  selectedServices: Record<string, string[]>;
  additionalNotes: string;
  service?: string;
}

// Sanitize string input - only remove truly dangerous characters
export const sanitizeString = (input: string, maxLength: number = 500): string => {
  if (!input) return '';
  
  // Only remove null bytes and very dangerous control characters
  // Keep spaces, newlines, tabs, and normal text
  let sanitized = input.replace(/[\x00\x08\x0B\x0C\x0E-\x1F\x7F]/g, '');
  
  // Trim only on final submission, not during typing
  sanitized = sanitized.trim();
  
  // Limit length
  if (sanitized.length > maxLength) {
    sanitized = sanitized.substring(0, maxLength);
  }
  
  return sanitized;
};

// Validate URL to prevent SSRF attacks
export const validateUrl = (url: string): ValidationResult => {
  if (!url || url.trim() === '') {
    return { isValid: false, error: 'URL is required' };
  }
  
  try {
    const urlObj = new URL(url);
    
    // Only allow HTTPS
    if (urlObj.protocol !== 'https:') {
      return { isValid: false, error: 'Only HTTPS URLs are allowed' };
    }
    
    // Block localhost and private IPs (SSRF protection)
    const hostname = urlObj.hostname.toLowerCase();
    if (
      hostname === 'localhost' ||
      hostname === '127.0.0.1' ||
      hostname.startsWith('192.168.') ||
      hostname.startsWith('10.') ||
      hostname.startsWith('172.16.') ||
      hostname.startsWith('172.17.') ||
      hostname.startsWith('172.18.') ||
      hostname.startsWith('172.19.') ||
      hostname.startsWith('172.20.') ||
      hostname.startsWith('172.21.') ||
      hostname.startsWith('172.22.') ||
      hostname.startsWith('172.23.') ||
      hostname.startsWith('172.24.') ||
      hostname.startsWith('172.25.') ||
      hostname.startsWith('172.26.') ||
      hostname.startsWith('172.27.') ||
      hostname.startsWith('172.28.') ||
      hostname.startsWith('172.29.') ||
      hostname.startsWith('172.30.') ||
      hostname.startsWith('172.31.')
    ) {
      return { isValid: false, error: 'Invalid URL' };
    }
    
    return { isValid: true };
  } catch {
    return { isValid: false, error: 'Invalid URL format' };
  }
};

// Sanitize HTML - escape special characters
export const sanitizeHtml = (input: string): string => {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '/': '&#x2F;',
  };
  return input.replace(/[&<>"'/]/g, (char) => map[char] || char);
};

// Validate full name
export const validateName = (name: string): ValidationResult => {
  const sanitized = sanitizeString(name, 100);
  
  if (!sanitized || sanitized.length === 0) {
    return { isValid: false, error: 'Name is required' };
  }
  
  if (sanitized.length < 2) {
    return { isValid: false, error: 'Name must be at least 2 characters' };
  }
  
  if (sanitized.length > 100) {
    return { isValid: false, error: 'Name must be less than 100 characters' };
  }
  
  // Allow letters, spaces, hyphens, apostrophes
  const namePattern = /^[a-zA-Z\s'-]+$/;
  if (!namePattern.test(sanitized)) {
    return { isValid: false, error: 'Name can only contain letters, spaces, hyphens, and apostrophes' };
  }
  
  return { isValid: true };
};

// Validate and sanitize phone number
export const validatePhone = (phone: string): ValidationResult => {
  const sanitized = sanitizeString(phone, 20);
  
  if (!sanitized || sanitized.length === 0) {
    return { isValid: false, error: 'Phone number is required' };
  }
  
  // Remove all non-digit characters for validation
  const digitsOnly = sanitized.replace(/\D/g, '');
  
  if (digitsOnly.length < 10) {
    return { isValid: false, error: 'Phone number must contain at least 10 digits' };
  }
  
  if (digitsOnly.length > 15) {
    return { isValid: false, error: 'Phone number is too long' };
  }
  
  // US phone number pattern (10 or 11 digits)
  if (digitsOnly.length !== 10 && digitsOnly.length !== 11) {
    return { isValid: false, error: 'Please enter a valid phone number' };
  }
  
  return { isValid: true };
};

// Format phone number for display/storage
export const formatPhone = (phone: string): string => {
  const digitsOnly = phone.replace(/\D/g, '');
  
  if (digitsOnly.length === 10) {
    return `(${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(3, 6)}-${digitsOnly.slice(6)}`;
  }
  
  if (digitsOnly.length === 11 && digitsOnly[0] === '1') {
    return `+1 (${digitsOnly.slice(1, 4)}) ${digitsOnly.slice(4, 7)}-${digitsOnly.slice(7)}`;
  }
  
  return phone;
};

// Validate email
export const validateEmail = (email: string): ValidationResult => {
  const sanitized = sanitizeString(email, 254); // RFC 5321 limit
  
  if (!sanitized || sanitized.length === 0) {
    return { isValid: false, error: 'Email is required' };
  }
  
  if (sanitized.length > 254) {
    return { isValid: false, error: 'Email is too long' };
  }
  
  // RFC 5322 compliant email regex (simplified)
  const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  
  if (!emailPattern.test(sanitized)) {
    return { isValid: false, error: 'Please enter a valid email address' };
  }
  
  // Check for common dangerous patterns
  if (sanitized.includes('..') || sanitized.startsWith('.') || sanitized.endsWith('.')) {
    return { isValid: false, error: 'Please enter a valid email address' };
  }
  
  return { isValid: true };
};

// Validate date (uses local timezone)
export const validateDate = (date: string): ValidationResult => {
  if (!date || date.length === 0) {
    return { isValid: false, error: 'Date is required' };
  }
  
  // Check if date is in valid ISO format (YYYY-MM-DD)
  const datePattern = /^\d{4}-\d{2}-\d{2}$/;
  if (!datePattern.test(date)) {
    return { isValid: false, error: 'Invalid date format' };
  }
  
  // Parse date in local timezone (not UTC)
  const [year, month, day] = date.split('-').map(Number);
  const selectedDate = new Date(year, month - 1, day);
  
  // Get today's date in local timezone (reset time to midnight)
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  
  // Check if date is valid (handles invalid dates like Feb 30)
  if (
    selectedDate.getFullYear() !== year ||
    selectedDate.getMonth() !== month - 1 ||
    selectedDate.getDate() !== day
  ) {
    return { isValid: false, error: 'Invalid date' };
  }
  
  // Check if date is not in the past
  if (selectedDate < today) {
    return { isValid: false, error: 'Date cannot be in the past' };
  }
  
  // Check if date is not too far in the future (e.g., 3 months)
  const maxDate = new Date(today);
  maxDate.setMonth(maxDate.getMonth() + 3);
  if (selectedDate > maxDate) {
    return { isValid: false, error: 'Date cannot be more than 3 months in advance' };
  }
  
  // Check if date is not a Sunday
  if (selectedDate.getDay() === 0) {
    return { isValid: false, error: 'We are closed on Sundays' };
  }
  
  return { isValid: true };
};

// Validate time
export const validateTime = (time: string, date?: string): ValidationResult => {
  if (!time || time.length === 0) {
    return { isValid: false, error: 'Time is required' };
  }
  
  if (!date) {
    return { isValid: false, error: 'Please select a date first' };
  }
  
  // Time should be in format like "9:00 AM", "9 AM", "6:00 PM", "6 PM", etc.
  // More flexible pattern to handle various formats from toLocaleTimeString
  const timePattern = /^(1[0-2]|[1-9])(?::([0-5][0-9]))?\s*(AM|PM)$/i;
  if (!timePattern.test(time.trim())) {
    return { isValid: false, error: 'Invalid time format' };
  }
  
  return { isValid: true };
};

// Validate service selection
export const validateServices = (services: Record<string, string[]>, required: boolean = false): ValidationResult => {
  const totalServices = Object.values(services).flat().length;
  
  if (required && totalServices === 0) {
    return { isValid: false, error: 'Please select at least one service' };
  }
  
  // Validate each service name
  for (const [category, serviceList] of Object.entries(services)) {
    for (const service of serviceList) {
      const sanitized = sanitizeString(service, 200);
      if (sanitized.length === 0 || sanitized.length > 200) {
        return { isValid: false, error: 'Invalid service selection' };
      }
    }
  }
  
  return { isValid: true };
};

// Validate additional notes
export const validateNotes = (notes: string): ValidationResult => {
  const sanitized = sanitizeString(notes, 1000);
  
  if (sanitized.length > 1000) {
    return { isValid: false, error: 'Notes must be less than 1000 characters' };
  }
  
  return { isValid: true };
};

// Sanitize form data
export const sanitizeFormData = (data: {
  fullName: string;
  phone: string;
  email: string;
  selectedDate: string;
  selectedTime: string;
  selectedServices: Record<string, string[]>;
  additionalNotes: string;
  service?: string;
}): SanitizedFormData => {
  // Sanitize services
  const sanitizedServices: Record<string, string[]> = {};
  for (const [category, services] of Object.entries(data.selectedServices)) {
    sanitizedServices[sanitizeString(category, 100)] = services.map(s => sanitizeString(s, 200));
  }
  
  // Sanitize notes - minimal sanitization, preserve everything normal
  let sanitizedNotes = data.additionalNotes || '';
  if (sanitizedNotes) {
    // Only remove null bytes and very dangerous control characters
    sanitizedNotes = sanitizedNotes.replace(/[\x00\x08\x0B\x0C\x0E-\x1F\x7F]/g, '');
    // Trim only leading/trailing whitespace
    sanitizedNotes = sanitizedNotes.trim();
    // Limit length
    if (sanitizedNotes.length > 1000) {
      sanitizedNotes = sanitizedNotes.substring(0, 1000);
    }
  }
  
  return {
    fullName: sanitizeString(data.fullName, 100),
    phone: formatPhone(data.phone),
    email: sanitizeString(data.email.toLowerCase(), 254),
    selectedDate: data.selectedDate,
    selectedTime: data.selectedTime.trim(), // Trim time to ensure consistent format
    selectedServices: sanitizedServices,
    additionalNotes: sanitizedNotes,
    service: data.service ? sanitizeString(data.service, 200) : undefined,
  };
};

// Validate entire form
export const validateForm = (data: {
  fullName: string;
  phone: string;
  email: string;
  selectedDate: string;
  selectedTime: string;
  selectedServices: Record<string, string[]>;
  additionalNotes: string;
  requireServices?: boolean;
}): { isValid: boolean; errors: Record<string, string> } => {
  const errors: Record<string, string> = {};
  
  const nameValidation = validateName(data.fullName);
  if (!nameValidation.isValid) {
    errors.fullName = nameValidation.error || 'Invalid name';
  }
  
  const phoneValidation = validatePhone(data.phone);
  if (!phoneValidation.isValid) {
    errors.phone = phoneValidation.error || 'Invalid phone';
  }
  
  const emailValidation = validateEmail(data.email);
  if (!emailValidation.isValid) {
    errors.email = emailValidation.error || 'Invalid email';
  }
  
  const dateValidation = validateDate(data.selectedDate);
  if (!dateValidation.isValid) {
    errors.selectedDate = dateValidation.error || 'Invalid date';
  }
  
  const timeValidation = validateTime(data.selectedTime, data.selectedDate);
  if (!timeValidation.isValid) {
    errors.selectedTime = timeValidation.error || 'Invalid time';
  }
  
  const servicesValidation = validateServices(data.selectedServices, data.requireServices);
  if (!servicesValidation.isValid) {
    errors.selectedServices = servicesValidation.error || 'Invalid services';
  }
  
  const notesValidation = validateNotes(data.additionalNotes);
  if (!notesValidation.isValid) {
    errors.additionalNotes = notesValidation.error || 'Invalid notes';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

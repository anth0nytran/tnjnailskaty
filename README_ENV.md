# Environment Variables Setup

## Web3Forms Access Key

The booking form requires a Web3Forms access key to send form submissions.

### Setup Instructions:

1. **Create `.env` file** in the root directory (if it doesn't exist)
2. **Add your access key**:
   ```
   VITE_WEB3FORMS_ACCESS_KEY=your-access-key-here
   ```
3. **Restart the development server** after creating/updating the `.env` file
   - Stop the server (Ctrl+C)
   - Start it again with `npm run dev` or `yarn dev`

### Important Notes:

- The `.env` file is in `.gitignore` and will NOT be committed to git
- Environment variables in Vite must start with `VITE_` to be exposed to the client
- **You MUST restart the dev server** after creating or modifying the `.env` file
- The `.env.example` file shows what variables are needed (safe to commit)

### Troubleshooting:

If you see "Configuration error: Access key not found":
1. Verify `.env` file exists in the root directory
2. Check that the variable name is exactly `VITE_WEB3FORMS_ACCESS_KEY`
3. Make sure there are no extra spaces or quotes around the value
4. **Restart your development server**
5. Check the browser console for debug information

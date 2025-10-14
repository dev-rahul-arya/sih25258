# Supabase Authentication Setup Guide

## Overview

This application uses Supabase for authentication with role-based access control. Users can be either **Admin** or **Regular User** based on their user metadata.

## Setting Up Users in Supabase

### 1. Create Users in Supabase Dashboard

1. Go to your Supabase project: https://supabase.com/dashboard
2. Navigate to **Authentication** > **Users**
3. Click **Add User** or **Invite User**

### 2. Configure User Metadata for Roles

After creating a user, you need to set their role in the user metadata:

1. Click on the user in the Users list
2. Scroll to **User Metadata** section
3. Add the following JSON to set user role:

**For Admin User:**
```json
{
  "role": "admin",
  "name": "Admin User"
}
```

**For Regular User:**
```json
{
  "role": "user",
  "name": "Regular User"
}
```

### 3. Example User Setup

**Admin Account:**
- Email: `admin@ndma.gov.in`
- Password: (set your password)
- User Metadata:
  ```json
  {
    "role": "admin",
    "name": "Admin User"
  }
  ```

**Regular User Account:**
- Email: `user@ndma.gov.in`
- Password: (set your password)
- User Metadata:
  ```json
  {
    "role": "user",
    "name": "Regular User"
  }
  ```

## Authentication Flow

1. **Login**: User enters email and password
2. **Supabase Authentication**: System calls `supabase.auth.signInWithPassword()`
3. **Role Extraction**: User role is extracted from `user.user_metadata.role`
4. **Session Storage**: User data is stored in localStorage for quick access
5. **Protected Routes**: Each page checks authentication on load

## Fallback Authentication

If Supabase is unavailable or not configured, the system falls back to mock authentication with these credentials:

- Admin: `admin@ndma.gov.in` / `admin123`
- User: `user@ndma.gov.in` / `user123`

## Role-Based Access Control

### Admin Role (`admin`)
- Full CRUD access to training programs
- Full CRUD access to participant registry
- Can add, edit, and delete records
- All admin-only buttons visible

### User Role (`user`)
- Read-only access to all modules
- Can view dashboards, trainings, participants, and reports
- Cannot add, edit, or delete records
- Admin-only buttons hidden

## Security Notes

- User roles are stored in Supabase user metadata
- Frontend uses roles for UI rendering (hiding/showing admin controls)
- For production, implement Row Level Security (RLS) policies in Supabase
- Never expose Supabase service role key in frontend code
- Current implementation uses anon key which is safe for client-side use

## Testing Authentication

1. Create test users in Supabase with appropriate metadata
2. Login with admin credentials to test admin features
3. Login with user credentials to verify read-only access
4. Test logout functionality
5. Verify session persistence across page refreshes

## Troubleshooting

**Issue**: Login fails with Supabase
- **Solution**: Verify Supabase URL and anon key in `assets/js/config.js`
- **Check**: Ensure users are created in Supabase dashboard
- **Verify**: User metadata contains correct role information

**Issue**: User role not recognized
- **Solution**: Update user metadata in Supabase dashboard
- **Format**: Ensure JSON is valid with `role` and `name` fields

**Issue**: Session not persisting
- **Solution**: Check browser localStorage is enabled
- **Clear**: Try clearing localStorage and logging in again

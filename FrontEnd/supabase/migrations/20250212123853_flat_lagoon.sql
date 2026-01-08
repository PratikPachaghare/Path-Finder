/*
  # Update Assessment Table RLS Policies

  1. Changes
    - Add proper RLS policies for assessments table
    - Ensure authenticated users can insert their own assessments
    - Allow users to read their own assessments

  2. Security
    - Enable RLS on assessments table
    - Add policies for authenticated users to manage their own data
*/

-- Drop existing policies if they exist
DO $$ 
BEGIN
  IF EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'assessments' AND policyname = 'Users can insert own assessments'
  ) THEN
    DROP POLICY "Users can insert own assessments" ON assessments;
  END IF;
END $$;

-- Create new policy for inserting assessments
CREATE POLICY "Users can insert own assessments"
ON assessments
FOR INSERT
TO authenticated
WITH CHECK (
  auth.uid() = user_id
);

-- Ensure the policy for reading assessments exists
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'assessments' AND policyname = 'Users can read own assessments'
  ) THEN
    CREATE POLICY "Users can read own assessments"
    ON assessments
    FOR SELECT
    TO authenticated
    USING (auth.uid() = user_id);
  END IF;
END $$;
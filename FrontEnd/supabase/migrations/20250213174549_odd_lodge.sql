/*
  # Improve Assessment Policies

  1. Security
    - Add policies for assessments table to ensure proper access control
    - Enable RLS for assessments table
    - Add policy for users to read their own assessments
    - Add policy for users to insert their own assessments
*/

-- Ensure RLS is enabled
ALTER TABLE assessments ENABLE ROW LEVEL SECURITY;

-- Create policy for users to read their own assessments
CREATE POLICY "Users can read own assessments"
ON assessments
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- Create policy for users to insert their own assessments
CREATE POLICY "Users can insert own assessments"
ON assessments
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);
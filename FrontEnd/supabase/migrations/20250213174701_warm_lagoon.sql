/*
  # Update Assessment Policies

  1. Security
    - Safely ensure RLS policies exist for assessments table
    - Use DO blocks to check for existing policies before creating them
*/

-- Ensure RLS is enabled
ALTER TABLE assessments ENABLE ROW LEVEL SECURITY;

-- Safely create policies if they don't exist
DO $$ 
BEGIN
  -- Check and create read policy
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'assessments' 
    AND policyname = 'Users can read own assessments'
  ) THEN
    CREATE POLICY "Users can read own assessments"
    ON assessments
    FOR SELECT
    TO authenticated
    USING (auth.uid() = user_id);
  END IF;

  -- Check and create insert policy
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'assessments' 
    AND policyname = 'Users can insert own assessments'
  ) THEN
    CREATE POLICY "Users can insert own assessments"
    ON assessments
    FOR INSERT
    TO authenticated
    WITH CHECK (auth.uid() = user_id);
  END IF;
END $$;
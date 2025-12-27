// // lib/uploadImage.ts
// import { supabase } from './supabaseClient';

// export const uploadImage = async (file: File) => {
//   const ext = file.name.split('.').pop();
//   const fileName = `${Date.now()}.${ext}`;
//   const filePath = `courses/${fileName}`;

//   const { error } = await supabase.storage
//     .from('courses')
//     .upload(filePath, file);

//   if (error) throw error;

//   const { data } = supabase.storage.from('courses').getPublicUrl(filePath);

//   return data.publicUrl;
// };

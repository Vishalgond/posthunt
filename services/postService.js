
export const createOrUpdatePost = async (post) => {
  try{
    if(post.file && typeof post.file == 'object'){
        let isImage = post?.file?.type == 'image';
        let folderName = isImage? 'postImage':'postVideos';
        let fileResult = await uploadFile(folderName,pots?.file?.uri,isImage);
        if(fileResult.success) post.file = fileResult.data;
        else{
            return fileResult;
        }
    }

    // const {data,error} = 
  }catch(error){
    console.log('createPost error: ',error)
    return {success: false,msg: 'Could not create your post'};
  }
}


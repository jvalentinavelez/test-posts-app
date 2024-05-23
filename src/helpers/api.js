const baseUrl = 'https://jsonplaceholder.typicode.com'

export const getPosts = async( ) => {
    try {
        const response = await fetch(`${baseUrl}/posts`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('There was an error fetching the data: ', error);
        return []; 
    }
}

export const getPost = async(postId) => {
    try {
        const response = await fetch(`${baseUrl}/posts/${postId}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('There was an error fetching the post: ', error);
        return []; 
    }
}

export const createPost = async(postData) => {
    try {
        const response = await fetch(`${baseUrl}/posts`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json;',
            },
            body: JSON.stringify(postData)
            
        })
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('There was an error creating the post: ', error);
        return []; 
    }
}

export const editPost = async(postId, postData) => {
    try {
        const response = await fetch(`${baseUrl}/posts/${postId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(postData)
            
        })
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('There was an error updating the post: ', error);
        return []; 
    }
}

export const deletePost = async(postId) => {
    try {
        const response = await fetch(`${baseUrl}/posts/${postId}`, {
            method: 'DELETE'
        })
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('There was an error deleting the post: ', error);
        return []; 
    }
}
export const getPosts = async( ) => {

    try {

        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();

        return data;

    } catch (error) {

        console.error('There was an error: ', error);
        return []; 
    }
}
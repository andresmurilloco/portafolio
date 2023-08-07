export async function getProjects(){
    const response = await fetch(`https://strapi-portafolio.onrender.com/api/proyectos?populate=image`)
    const {data} = await response.json();
    

    return(data);
}
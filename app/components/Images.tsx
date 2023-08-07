import Image from 'next/image';

export interface Props{
  image:any;
}

const Images = ({image}:Props) => {
  const base = image.attributes.formats;
  
  return (
    <div>
      <Image src={base.thumbnail.url} width={base.thumbnail.width} height={base.thumbnail.height} alt={`Image project`}/>
    </div>
  )
}

export default Images
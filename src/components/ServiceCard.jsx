const ServiceCard = ({image, title}) => {
  return (
    <div className="flex-1 basis-full sm:basis-[48%] lg:basis-[30%] min-w-0 flex flex-col items-center h-60 rounded-2xl hover:shadow-2xl shadow-lg p-4">
        <img 
        src={image} alt="image" 
        className="
        h-50 object-contain
        "/>
        <p>{title}</p>
    </div>
  )
}

export default ServiceCard
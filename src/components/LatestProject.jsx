import LatestProjectCard from "./LatestProjectCard";

const LatestProject = () => {
  return (
    <div id="latest-projects"
    className="p-7 my-13 sm:px-18"
    >
      <p className='md:text-3xl mb-5 text-aibek-cyan text-2xl font-bold'>Project Showcase</p>

      <div
      className='flex flex-wrap justify-center gap-5'
      >
        <LatestProjectCard image="images/benner.png" title="Benner"/>
      <LatestProjectCard image="images/card.png" title="Business Card"/>
      <LatestProjectCard image="images/chrest.png" title="Awards"/>
      <LatestProjectCard image="images/id.png" title="ID Card"/>
      <LatestProjectCard image="images/rebone.png" title="Ribbon"/>
      </div>

    </div>
  )
}

export default LatestProject
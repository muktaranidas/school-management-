import Image from "next/image";
export default function About() {
  return (
    <div>
        <section className="bg-[#2A3956]">
	<div className="container p-6 mx-auto ">
		<a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid items-center lg:grid-cols-2 ">
			<Image src="/aboutImage.jpg" width={638} height={25}></Image>
            <div className="px-6 ">
				<h3 className="text-2xl  font-semibold sm:text-4xl text-[#3DB166] mb-8">About School</h3>
                <p className="text-[#FFFFFF] text-base	">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
				<button className="mt-5 px-5 py-2 relative rounded group  text-white font-medium inline-block">
                    <span className="w-full h-full rounded  bg-[#3DB166]"></span>
                    <span className="h-full w-full mt-0.5 ml-0.5  rounded bg-[#3DB166]"></span>
                    <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl  filter group-active:opacity-0  bg-[#3DB166]"></span>
                    <span className="w-full h-full t rounded  bg-[#3DB166]"></span>
                    <span className="relative font-bold">Learn More</span>
                </button>
			</div>
		</a>
	</div>
</section>
    </div>  
  );
}
import Image from "next/image";
export default function About() {
  return (
    <div>
        <section className="bg-[#2A3956]">
	<div className="container max-w-6xl p-6 mx-auto ">
		<a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid items-center lg:grid-cols-2 ">
			<Image src="/aboutImage.jpg" width={638} height={0}></Image>
            <div className="px-6 ">
				<h3 className="text-2xl  my-8 font-semibold sm:text-4xl text-[#3DB166]">About School</h3>
                <p className="text-[#FFFFFF] text-base	">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
				<a href="#_" class="mt-5 px-5 py-2 relative rounded group font-medium text-white font-medium inline-block">
                    <span class="w-full h-full rounded  bg-[#3DB166]"></span>
                    <span class="h-full w-full mt-0.5 ml-0.5  rounded bg-[#3DB166]"></span>
                    <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl  filter group-active:opacity-0  bg-[#3DB166]"></span>
                    <span class="w-full h-full t rounded  bg-[#3DB166]"></span>
                    <span class="relative font-bold">Learn More</span>
                </a>
			</div>
		</a>
		
	</div>
</section>
    </div>
  );
}
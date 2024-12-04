import Image from "next/image";
import data from "../../../../public/data/projects.json";
import AllProjectImage from "./AllProjectImage";

const AllProjectBody = () => {
  return (
    <div className="py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data.map((item) => {
          return (
            <div key={item.id} className="flex flex-col items-center rounded-lg shadow-lg overflow-hidden mb-8">
              <AllProjectImage
                image={require(`../../../../public${item.image}`)}
                hight={500}
                width={1232}
                title={item.title}
                text={item.description}
                id={item.id}
              />
            </div>

          );
        })}
      </div>
    </div>
  );
};

export default AllProjectBody;

import Image from "next/image";
import data from '../../../../public/data/projects.json';
import AllProjectImage from './AllProjectImage';

const AllProjectBody = () => {
  return (
    <div>
      <div>
        <div>
          {data.map((item) => {
            return (
              <AllProjectImage
                key={item.id}
                image={require(`../../../../public${item.image}`)}
                hight={item.height}
                width={item.width}
                title={item.title}
                text={item.description}
                id={item.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllProjectBody;

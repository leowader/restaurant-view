// import LocalMallIcon from '@mui/icons-material/LocalMall';
import { Input } from "@material-tailwind/react";
import Modal from "../components/Modal";
import Total from "./Total";
import { useEffect, useState } from "react";
export default function Home() {
  const menu = [
    {
      name: "order",
      icon: <i className="bi bi-house-fill text-[#CDCDCD] text-[20px]"></i>,
    },
    {
      name: "Home",
      icon: (
        <i className="bi bi-bag-check-fill text-[#CDCDCD]  text-[20px]"></i>
      ),
    },
    {
      name: "Home",
      icon: (
        <i className="bi bi-bag-check-fill text-[#CDCDCD]  text-[20px]"></i>
      ),
    },
    {
      name: "Home",
      icon: (
        <i className="bi bi-bag-check-fill text-[#CDCDCD]  text-[20px]"></i>
      ),
    },
    {
      name: "Home",
      icon: (
        <i className="bi bi-bag-check-fill text-[#CDCDCD]  text-[20px]"></i>
      ),
    },
    {
      name: "Home",
      icon: (
        <i className="bi bi-bag-check-fill text-[#CDCDCD]  text-[20px]"></i>
      ),
    },
    {
      name: "Home",
      icon: (
        <i className="bi bi-bag-check-fill text-[#CDCDCD]  text-[20px]"></i>
      ),
    },
    {
      name: "Home",
      icon: (
        <i className="bi bi-bag-check-fill text-[#CDCDCD]  text-[20px]"></i>
      ),
    },
  ];
  const categorias = [
    {
      name: "Todos",
      img: "https://cdn3d.iconscout.com/3d/premium/thumb/valentine-dinner-4849217-4043187.png",
    },
    {
      name: "Desayuno",
      img: "https://gd-hbimg.huaban.com/a66356ae36ad85feb800f3de98638ee1ab102897135b7-BvVJSC",
    },
    {
      name: "Almuerzo",
      img: "https://static.vecteezy.com/system/resources/previews/010/885/724/original/fast-food-3d-rendering-illustration-png.png",
    },
    {
      name: "Cena",
      img: "https://static.vecteezy.com/system/resources/thumbnails/020/046/714/small_2x/hotdog-food-3d-png.png",
    },
  ];
  const platos = [
    {
      name: "Huevo frito",
      precio: 10000,
      type: "Desayuno",
      img: "https://static.vecteezy.com/system/resources/thumbnails/022/587/911/small/asian-food-oden-3d-illustration-png.png",
    },
    {
      name: "Pizza",
      precio: 10000,
      type: "Desayuno",
      img: "https://static.vecteezy.com/system/resources/previews/013/195/725/non_2x/pizza-3d-illustration-free-png.png",
    },

    {
      name: "Caldo",
      precio: 10000,
      type: "Desayuno",
      img: "https://cdn3d.iconscout.com/3d/premium/thumb/ramen-6605232-5491326.png",
    },
    {
      name: "Hamburguesa",
      precio: 10000,
      type: "Desayuno",
      img: "https://img.freepik.com/psd-gratis/representacion-3d-deliciosa-hamburguesa-queso_23-2149108546.jpg?w=2000",
    },
    {
      name: "Caldo",
      precio: 10000,
      type: "Desayuno",
      img: "https://cdn3d.iconscout.com/3d/premium/thumb/ramen-6605232-5491326.png",
    },
    {
      name: "Cerdo",
      precio: 10000,
      type: "Almuerzo",
      img: "https://img.freepik.com/foto-gratis/closeup-foto-rodajas-salchichas-lechuga-verde-sobre-tabla-madera_181624-38741.jpg",
    },
    {
      name: "Chuzo",
      precio: 10000,
      type: "Cena",
      img: "https://static.vecteezy.com/system/resources/thumbnails/015/271/491/small/chicken-satay-with-peanut-sauce-3d-transparency-background-png.png",
    },
    {
      name: "Mestizo",
      precio: 10000,
      type: "Almuerzo",
      img: "https://static.vecteezy.com/system/resources/thumbnails/021/217/451/small/rice-with-potatoes-and-meat-png.png",
    },
    {
      name: "Huevo frito",
      precio: 10000,
      type: "Cena",
      img: "https://static.vecteezy.com/system/resources/thumbnails/022/587/911/small/asian-food-oden-3d-illustration-png.png",
    },
  ];
  const [desayunoCount, setDesayunoCount] = useState(0);
  const [almuerzoCount, setAlmuerzoCount] = useState(0);

  const [clickedCategory, setClickedCategory] = useState(null);
  const [cenaCount, setCenaCount] = useState(0);
  const [filteredPlatos, setFilteredPlatos] = useState(platos);

  const handleCategoryClick = (index) => {
    setClickedCategory(index);

    if (index === clickedCategory) {
      setClickedCategory(null);
      setFilteredPlatos(platos); // Restaurar la lista completa al hacer clic nuevamente
    } else {
      const selectedCategory = categorias[index].name;
      const filteredByType = platos.filter(
        (plato) => plato.type === selectedCategory
      );
      if (filteredByType.length > 0) {
        setFilteredPlatos(filteredByType);
      } else {
        setFilteredPlatos(platos);
      }
    }
  };
  const onChange = (event) => {
    console.log(event.target.value);
    const filteredIput = platos.filter((plato) =>
      plato.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredPlatos(filteredIput);
  };

  // Contar platos por tipo
  const contarPlatosPorTipo = () => {
    // Inicializar contadores temporales
    let desayunoCounter = 0;
    let almuerzoCounter = 0;
    let cenaCounter = 0;

    // Contar platos por tipo
    platos.forEach((plato) => {
      switch (plato.type) {
        case "Desayuno":
          desayunoCounter++;
          break;
        case "Almuerzo":
          almuerzoCounter++;
          break;
        case "Cena":
          cenaCounter++;
          break;
        // Puedes agregar más casos según sea necesario para otros tipos de platos
        default:
          break;
      }
    });
    setDesayunoCount(desayunoCounter);
    setAlmuerzoCount(almuerzoCounter);
    setCenaCount(cenaCounter);
  };
  useEffect(() => {
    contarPlatosPorTipo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="flex flex-rows h-screen p-5 gap-5">
      <div className=" bg-white rounded-lg drop-shadow-xl p-2">
        <div className="w-full flex justify-center">
          <img
            className="rounded-full h-16 w-16  bg-[#E2903B]"
            src="https://cdn3d.iconscout.com/3d/premium/thumb/chef-avatar-6299542-5187874.png"
            alt=""
          />
        </div>
        <div className="p-5 grid grid-cols-2 w-48 gap-6">
          {menu.map((men, i) => (
            <div
              className="p-2  bg-[#F6FAFD] text-[#CDCDCD]  w-auto rounded-lg flex flex-col justify-center items-start"
              key={i}
            >
              <div className="w-full flex justify-center">{men.icon}</div>
              {men.name}
            </div>
          ))}
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <div className="w-28 h-28">
            <img
              src="https://static.vecteezy.com/system/resources/previews/011/027/526/original/korean-icon-bibimbap-food-3d-illustration-png.png"
              alt=""
            />
          </div>

          <Modal></Modal>
        </div>
      </div>

      <div className="w-full  bg-white rounded-lg  drop-shadow-xl p-2 relative">
        <div className="flex gap-2">
          <Total tipo={"Desayuno"} total={desayunoCount}></Total>
          <Total tipo={"Almuerzo"} total={almuerzoCount}></Total>
          <Total tipo={"Cena"} total={cenaCount}></Total>
        </div>
        <span className="font-bold mt-2">Categorias</span>
        <div className="flex mt-2 gap-2 ">
          {categorias.map((cat, i) => (
            <div
              key={i}
              className={`bg-[#F2F7FB] w-32 rounded-full flex   items-center p-1 hover:text-white hover:bg-[#212121] cursor-pointer ${
                clickedCategory === i ? "  bg-[#212121] text-white" : ""
              }`}
              onClick={() => {
                handleCategoryClick(i);
              }}
            >
              <img
                className="h-8 w-8 rounded-full bg-white"
                src={cat.img}
                alt=""
              />
              <span className="w-full text-center">{cat.name}</span>
            </div>
          ))}
        </div>
        <div className="w-full mt-2">
          <Input
            label="Buscar"
            icon={<i className="bi bi-search"></i>}
            onChange={onChange}
          />
        </div>

        {/* platos */}
        <div className="grid grid-cols-3 w-full  gap-2 mt-2 bg-[#F2F7FB] rounded-lg p-2 overflow-auto h-[385px]">
          {filteredPlatos.map((comida, i) => (
            <div
              key={i}
              className=" rounded-lg w-full h-44 bg-white drop-shadow-md p-2"
            >
              <div className="w-full flex justify-center">
                <img
                  className="w-28 h-28 rounded-full"
                  src={comida.img}
                  alt=""
                />
              </div>
              <div className="font-bold w-full text-center text-[14px] ">
                {" "}
                {comida.name} <br /> ${comida.precio.toLocaleString()}{" "}
              </div>
            </div>
          ))}
        </div>
        {/* <LocalMallIcon></LocalMallIcon> */}
      </div>
      <div className="w-full  bg-white rounded-lg  drop-shadow-xl">3</div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
} from "@material-tailwind/react";
export default function MessageDialog() {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [selected, setSelected] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [platosList, setPlatosList] = useState([]);
  const save = () => {
    const nuevoPlato = {
      name,
      price,
      img,
      type: selected,
      description,
    };
    // Actualiza la lista de platos con el nuevo plato
    setPlatosList([...platosList, nuevoPlato]);
    localStorage.setItem("platos", JSON.stringify([...platosList, nuevoPlato]));
  };
  useEffect(() => {
    const storedPlatos = JSON.parse(localStorage.getItem("platos")) || [];
    setPlatosList(storedPlatos);
  }, []);
  useEffect(() => {
    localStorage.setItem("platos", JSON.stringify(platosList));
  }, [platosList]);

  const cerrar = () => setOpen(!open);

  const onName = (e) => {
    setName(e.target.value);
  };
  return (
    <>
      <Button onClick={cerrar} size="sm">
        Registrar plato
      </Button>
      <Dialog open={open} size="xs" handler={cerrar}>
        <div className="flex items-center justify-between">
          <DialogHeader className="flex flex-col items-start">
            {" "}
            <span className="mb-1">Registro de platos </span>
          </DialogHeader>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5"
            onClick={cerrar}
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <DialogBody>
          <span className="mb-10 -mt-2 " color="gray">
            Ingrese la informacion del plato
          </span>
          <div className="grid gap-6">
            <span className="-mb-1" color="blue-gray">
              Username
            </span>
            <Input label="Nombre" onChange={onName} />
            <Input label="Precio" onChange={(e) => setPrice(e.target.value)} />
            <Input label="img" onChange={(e) => setImg(e.target.value)} />
            <div className="">
              <select
                className="appearance-none mt-2  text-sm border bg-white border-[#B0BEC5] rounded-lg outline-0  block w-full p-2.5 "
                onChange={(e) => setSelected(e.target.value)}
              >
                <option value="Desayuno">Desayuno</option>
                <option value="Almuerzo">Almuerzo </option>
                <option value="Cena">Cena</option>
              </select>
            </div>
            <Textarea
              label="Descripcion"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="text" color="gray" onClick={cerrar}>
            cancel
          </Button>
          <Button variant="gradient" color="gray" onClick={save}>
            send message
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

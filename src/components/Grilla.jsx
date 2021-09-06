import React from 'react';
import { Item } from './Item';
import "../styles/Grilla.css";

const data = [
    {
        titulo: 'Titulo 01',
        subtitulo: "Subtítulo 01",
        image: "https://picsum.photos/200/300"
    },
    {
        titulo: 'Titulo 02',
        subtitulo: "Subtítulo 02",
        image: "https://picsum.photos/200/350"
    },
    {
        titulo: 'Titulo 03',
        subtitulo: "Subtítulo 03",
        image: "https://picsum.photos/200/330"
    },
    {
        titulo: 'Titulo 04',
        subtitulo: "Subtítulo 04",
        image: "https://picsum.photos/100/300"
    },
    {
        titulo: 'Titulo 05',
        subtitulo: "Subtítulo 05",
        image: "https://picsum.photos/150/200"
    },
    {
        titulo: 'Titulo 05',
        subtitulo: "Subtítulo 05",
        image: "https://picsum.photos/200/250"
    },
    {
        titulo: 'Titulo 05',
        subtitulo: "Subtítulo 05",
        image: "https://picsum.photos/200/370"
    },
    {
        titulo: 'Titulo 05',
        subtitulo: "Subtítulo 05",
        image: "https://picsum.photos/200/300"
    },
    {
        titulo: 'Titulo 05',
        subtitulo: "Subtítulo 05",
        image: "https://picsum.photos/200/340"
    },
    {
        titulo: 'Titulo 05',
        subtitulo: "Subtítulo 05",
        image: "https://picsum.photos/200/360"
    }
];

const Grilla = () => {
    return (
        <div className="grilla-container">
            {data.map((element) => {
                return (
                    <Item {...element}/>
                )
            })
            }
        </div>
    )
}

export {Grilla};
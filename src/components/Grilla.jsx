import React from 'react';
import { Item } from './Item';
import "../styles/Grilla.css";

const data = [
    {
        titulo: 'Title 01',
        subtitulo: "Subtitle 01",
        image: "https://picsum.photos/200/300"
    },
    {
        titulo: 'Title 02',
        subtitulo: "Subtitle 02",
        image: "https://picsum.photos/200/350"
    },
    {
        titulo: 'Title 03',
        subtitulo: "Subtitle 03",
        image: "https://picsum.photos/200/330"
    },
    {
        titulo: 'Title 04',
        subtitulo: "Subtitle 04",
        image: "https://picsum.photos/100/300"
    },
    {
        titulo: 'Title 05',
        subtitulo: "Subtitle 05",
        image: "https://picsum.photos/150/200"
    },
    {
        titulo: 'Title 06',
        subtitulo: "Subtitle 06",
        image: "https://picsum.photos/200/250"
    },
    {
        titulo: 'Title 07',
        subtitulo: "Subtitle 07",
        image: "https://picsum.photos/200/370"
    },
    {
        titulo: 'Title 08',
        subtitulo: "Subtitle 08",
        image: "https://picsum.photos/200/300"
    },
    {
        titulo: 'Title 09',
        subtitulo: "Subtitle 09",
        image: "https://picsum.photos/200/340"
    },
    {
        titulo: 'Title 10',
        subtitulo: "Subtitle 10",
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
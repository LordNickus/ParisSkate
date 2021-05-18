import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: '#282c34',
    },
    gridList: {
      width: 500,
      height: 450,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  })
);
const fotosSkate1 = [
       {
         img: 'imagenes/foto_01.jpeg',
         title: 'Zapatillas',
         author: 'ParisSkate',
       },
       {
        img: 'imagenes/foto_012.jpeg',
        title: 'Zapatillas',
        author: 'ParisSkate',
      },
      {
        img: 'imagenes/foto_013.jpeg',
        title: 'Zapatillas',
        author: 'ParisSkate',
      },
      {
        img: 'imagenes/foto_02.jpeg',
        title: 'Tablas',
        author: 'ParisSkate',
      },
      {
        img: 'imagenes/foto_03.jpeg',
        title: 'Tablas',
        author: 'ParisSkate',
      },
      {
        img: 'imagenes/foto_04.jpeg',
        title: 'Tablas',
        author: 'ParisSkate',
      },
      {
        img: 'imagenes/foto_05.jpeg',
        title: 'Tablas',
        author: 'ParisSkate',
      },
      {
        img: 'imagenes/foto_06.jpeg',
        title: 'Tablas',
        author: 'ParisSkate',
      },
      {
        img: 'imagenes/foto_07.jpeg',
        title: 'Accesorios',
        author: 'ParisSkate',
      },
      {
        img: 'imagenes/foto_08.jpeg',
        title: 'Tablas lisas',
        author: 'ParisSkate',
      },
      {
        img: 'imagenes/foto_09.jpeg',
        title: 'Accesorios',
        author: 'ParisSkate',
      },
      {
        img: 'imagenes/foto_10.jpeg',
        title: 'Tablas',
        author: 'ParisSkate',
      },
]

export default function TitlebarGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div" color='primary'>Todo para Skaters</ListSubheader>
        </GridListTile>
        {fotosSkate1.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
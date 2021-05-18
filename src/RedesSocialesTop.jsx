import React from 'react'

const RedesSocialesTop = ()=> {

    
        var redesSociales=[
            { logoImagen : 'Imagenes/Yout.png',
              link :'https://www.youtube.com/results?search_query=skateshop',
              marcaImagen: 'Youtube',
            },           
            { logoImagen : 'Imagenes/Face.png',
              link :'https://www.facebook.com/parisskateshop',
              marcaImagen: 'Facebook', 
            },
            { logoImagen : 'Imagenes/Inst.png',
              link :'https://www.instagram.com/parisskateshop/',
              marcaImagen: 'Instagram',
            },
            { logoImagen : 'Imagenes/Wats.png',
              link :'@parisskateshop',
              marcaImagen: 'Wassap',
            },
            ]
     return (
             <div>
                { 
                redesSociales.map(function(dato){
                    return <div className="redesTop" key={dato.logoImagen}>
                      <a
                      href={dato.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      ><img src={dato.logoImagen} width = "30" height = "30"/></a>  
                      </div>     
                })    
            }                    
            </div> 
)

}
export default RedesSocialesTop
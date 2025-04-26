import React from 'react';


export default function Location()
{
    const navigation=()=>{
        navigator.geolocation.getCurrentPosition(
            (pos)=>{
                const lat=pos.coords.latitude
                const lon=pos.coords.longitude

                const des="Maa Sharda puri Near JK Mittal Academy Bhatwaliya Deoria,UP"

                const url=`https://www.google.com/maps/dir/?api=1&origin=${lat},${lon}&destination=${des}`
                window.open(url,'_blank')
                console.log(lat,lon)
                // console.log(pos)
            },
            (err)=>{
                alert('Please allow location access to get directions.');
        console.error('Geolocation error:', error);

            }
        )
    }

    return(
        <button type="button" onClick={navigation} className="w-fit px-8 py-3 lg:my-1  font-bold rounded-full bg-white text-black hover:bg-gray-600 transition">
        Location
      </button>
    )
}
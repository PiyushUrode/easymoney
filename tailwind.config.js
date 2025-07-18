/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

 fontFamily: {
        gilroy: ['Gilroy', 'sans-serif'],
        gilroyB: ['gilroyB', 'sans-serif'],
        gilroyH: ['gilroyH', 'sans-serif'],
        gilroyR: ['gilroyR', 'sans-serif'],
        gilroyM: ['gilroyM', 'sans-serif'],
        gilroyL: ['gilroyL', 'sans-serif'],
        cinzel: ['Cinzel', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
        poppins: ['poppins', 'sans-serif'],
        poppinsb: ['poppinsb', 'sans-serif'],
        latoB: ['latoB', 'sans-serif'],
      },



      screens: {
        zIndex: {
          '60': '60',
          '9999': '9999', // Custom high z-index value
        },
        screens: {
          // Reuse Tailwind's default breakpoints
          am: '400px',
          sm:  '550px',  
          md:  '768px' , 
          lg:  '1024px', 
          xl:  '1280px',
        },



      },
      borderImage: {
        'custom-gradient1': 'linear-gradient(180deg, #6D4CFF 0%, #00C6FF 100%);', 
      
        'custom-gradient2': 'linear-gradient(90deg, rgba(1,108,140,1) 0%, rgba(1,56,73,1) 50%, rgba(0,0,0,1) 100%);', 
      },
      backgroundImage: {

 
     'partners-gradient': 'linear-gradient(269.86deg, rgba(231, 183, 100, 0.1) 20.93%, rgba(0, 0, 0, 0.1) 100.8%);',

      // 'text-custom-gradient': 'linear-gradient(90deg,rgba(231, 183, 100, 1) 0%, rgba(0, 0, 0, 1) 13%, rgba(0, 0, 0, 1) 88%, rgba(231, 183, 100, 1) 100%);',
        'button-custom-gradient': ' linear-gradient(90deg, #6D4CFF 0%, #00C6FF 100%);',
        'custom-gradient': 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,161,0,1) 100%); ',
        'usecase-gradient': 'linear-gradient(269.86deg, rgba(231, 183, 100, 0.1) 20.93%, rgba(0, 0, 0, 0.1) 100.8%);',
        'usecase-gradient2': 'linear-gradient(90deg, rgba(1,108,140,1) 0%, rgba(1,56,73,1) 50%, rgba(0,0,0,1) 100%)',
        
 


       
 

        

       
      },
      backgroundSize: {
        "200%": "200% 100%",
      },


      scrollbar: {
        width: {
          thin: '1px', // Adjust width as needed background: linear-gradient(0deg, #D9D9D9, #D9D9D9),
          
          
        },


        color: {
          track: 'bg-gray-200', // Track color
          thumb: 'bg-blue-500', // Thumb color
          hover: 'bg-blue-700', // Thumb hover color
        },
      },
      
      boxShadow: {
        'custom-drop': '0px 4px 4px #000000', 
        'custom-drop2': 'inset 0px -1px 20px 3px #00FFED;', 
        'custom-inner': 'inset 0px 4px 5px 5px 0.5  #00FFED', // Inner shadow
        'custom-purple': '0px 0px 25px 23px rgba(255, 161, 0, 1)',
        'custom-token': '0px 0px 20px 11px rgba(255, 237, 73, 1)',
        'inner-custom': 'inset 0 0 18px #ffa100',
      },




      // roadmap card border properties
   
    }
    
  },
  plugins: [  ],
}

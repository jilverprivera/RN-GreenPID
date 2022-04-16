import {COLORS, FONTS, SIZES} from '../constants';

export const stylesPDF = `
* {
  border: 0;
  box-sizing: content-box;
  line-height: inherit;
  list-style: none;
  margin: 0;
  padding: 0;
  text-decoration: none;
  vertical-align: top;
  text-align: center;
}

html { 
  font-size: ${SIZES.body2}px;
  font-family: ${FONTS.regular}; 
  background-color: ${COLORS.white}; 
  overflow: auto;
  cursor: default;
}

body { 
  box-sizing: border-box;
  margin: 0 auto;
  overflow: hidden;
  padding: ${SIZES.padding / 2}px;
  background-color: ${COLORS.white};
}

header { 
  background: ${COLORS.black}; 
  border-radius: ${SIZES.borders}px;
  margin-bottom: ${SIZES.margin}px;
}

h1 {
  color: ${COLORS.white};  
  font-family: ${FONTS.bold};
  font-size: ${SIZES.heading2}px;
  padding: ${SIZES.padding}px;
  text-transform: uppercase;
}


/* table */

table {
  font-size: 75%;
  table-layout: fixed;
  width: 100%;
  border-collapse: separate;
  border-spacing: 2px;
}
th {
  position: relative;
  padding: ${SIZES.padding / 2}px; 
  border-radius: ${SIZES.borders / 2}px;
  background-color: ${COLORS.lightGray}; 
}
td {
  position: relative;
  padding: ${SIZES.padding / 2}px; 
  border-radius: ${SIZES.borders / 2}px;
  align-items: center; 
  justify-content: center;
}
span{
  align-items: center; 
  justify-content: center;
  text-align: center;
}


.meta { 
  display: block;
  width: 40%;
}
.meta th { 
  width: 50%;
  padding: ${SIZES.padding * 0.75}px; 
}
.meta td { 
  width: 50%;
}









`;

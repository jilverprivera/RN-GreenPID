import {THEME} from '../styles/Theme';

const PDFStyles = `
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
  font-size: ${THEME.SIZES.body2}px;
  font-family: ${THEME.FONTS.regular}; 
  background-color: ${THEME.COLORS.white}; 
  overflow: auto;
  cursor: default;
}

body { 
  box-sizing: border-box;
  margin: 0 auto;
  overflow: hidden;
  padding: ${THEME.SIZES.padding / 2}px;
  background-color: ${THEME.COLORS.white};
}

header { 
  background: ${THEME.COLORS.black}; 
  border-radius: ${THEME.SIZES.borders}px;
  margin-bottom: ${THEME.SIZES.margin}px;
}

h1 {
  color: ${THEME.COLORS.white};  
  font-family: ${THEME.FONTS.bold};
  font-size: ${THEME.SIZES.heading2}px;
  padding: ${THEME.SIZES.padding}px;
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
  padding: ${THEME.SIZES.padding / 2}px; 
  border-radius: ${THEME.SIZES.borders / 2}px;
  background-color: ${THEME.COLORS.lightGray}; 
}
td {
  position: relative;
  padding: ${THEME.SIZES.padding / 2}px; 
  border-radius: ${THEME.SIZES.borders / 2}px;
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
  padding: ${THEME.SIZES.padding * 0.75}px; 
}
.meta td { 
  width: 50%;
}
`;

export default PDFStyles;

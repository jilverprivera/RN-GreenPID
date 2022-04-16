import {Platform} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';

export const MARKDOWN_STYLES = {
  // The main container
  body: {},

  // Headings
  heading1: {
    flexDirection: 'row',
    fontSize: SIZES.heading1,
    color: COLORS.black,
  },
  heading2: {
    flexDirection: 'row',
    fontSize: SIZES.heading2,
    color: COLORS.black,
  },
  heading3: {
    flexDirection: 'row',
    fontSize: SIZES.heading3,
    color: COLORS.black,
  },
  heading4: {
    flexDirection: 'row',
    fontSize: SIZES.heading4,
    color: COLORS.black,
  },
  heading5: {
    flexDirection: 'row',
    fontSize: SIZES.heading5,
    color: COLORS.black,
  },
  heading6: {
    flexDirection: 'row',
    fontSize: 11,
    color: COLORS.black,
  },

  // Horizontal Rule
  hr: {
    backgroundColor: COLORS.black,
    height: 1,
  },

  // Emphasis
  strong: {
    fontWeight: 'bold',
  },
  em: {
    fontStyle: 'italic',
  },
  s: {
    textDecorationLine: 'line-through',
  },

  // Blockquotes
  blockquote: {
    borderColor: COLORS.lightGray,
    backgroundColor: COLORS.white,
    borderLeftWidth: SIZES.margin / 4,
    marginLeft: SIZES.margin / 2,
    paddingHorizontal: SIZES.padding / 2,
  },

  // Lists
  bullet_list: {},
  ordered_list: {},
  list_item: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  // @pseudo class, does not have a unique render rule
  bullet_list_icon: {
    marginLeft: SIZES.margin,
    marginRight: SIZES.margin,
  },
  // @pseudo class, does not have a unique render rule
  bullet_list_content: {
    flex: 1,
  },
  // @pseudo class, does not have a unique render rule
  ordered_list_icon: {
    marginLeft: SIZES.margin,
    marginRight: SIZES.margin,
  },
  // @pseudo class, does not have a unique render rule
  ordered_list_content: {
    flex: 1,
  },

  // Code
  code_inline: {
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    backgroundColor: COLORS.white,
    padding: SIZES.padding,
    borderRadius: SIZES.borders / 2,
    ...Platform.select({
      ['ios']: {
        fontFamily: FONTS.regular,
      },
      ['android']: {
        fontFamily: FONTS.regular,
      },
    }),
  },
  code_block: {
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    backgroundColor: COLORS.white,
    padding: SIZES.padding,
    borderRadius: SIZES.borders / 2,
    ...Platform.select({
      ['ios']: {
        fontFamily: FONTS.regular,
      },
      ['android']: {
        fontFamily: FONTS.regular,
      },
    }),
  },
  fence: {
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    backgroundColor: COLORS.white,
    padding: SIZES.padding,
    borderRadius: SIZES.borders / 2,
    ...Platform.select({
      ['ios']: {
        fontFamily: FONTS.regular,
      },
      ['android']: {
        fontFamily: FONTS.regular,
      },
    }),
  },

  // Tables
  table: {
    borderWidth: 1,
    borderColor: COLORS.black,
    borderRadius: SIZES.borders / 2,
  },
  thead: {},
  tbody: {},
  th: {
    flex: 1,
    padding: SIZES.padding / 2,
  },
  tr: {
    borderBottomWidth: 1,
    borderColor: COLORS.black,
    flexDirection: 'row',
  },
  td: {
    flex: 1,
    padding: SIZES.padding / 2,
  },

  // Links
  link: {
    textDecorationLine: 'underline',
  },
  blocklink: {
    flex: 1,
    borderColor: COLORS.black,
    borderBottomWidth: 1,
  },

  // Images
  image: {
    width: SIZES.width - SIZES.margin,
    height: SIZES.width - SIZES.margin,
  },

  // Text Output
  text: {},
  textgroup: {},
  paragraph: {
    marginTop: SIZES.margin / 2,
    marginBottom: SIZES.margin / 2,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
    color: COLORS.black,
  },
  hardbreak: {
    width: '100%',
    height: 1,
  },
  softbreak: {},

  // Believe these are never used but retained for completeness
  pre: {},
  inline: {},
  span: {},
};

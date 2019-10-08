import { Sizes } from '../../../configs';

export default {
  textFamily: {
    fontSize: Sizes.text.m.size,
    fontFamily: Sizes.fontFamily,
  },

  list: {
    container: {
      flex: -1,
    },

    contentContainer: {
      marginTop: 4,
      paddingHorizontal: Sizes.screen.paddingHorizontal,
    },

    headerContainer: {
      marginHorizontal: Sizes.screen.paddingHorizontal,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'baseline',
    },
  },

  wrapper: {
    flex: -1,
  },
};

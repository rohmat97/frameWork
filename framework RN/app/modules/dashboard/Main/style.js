import { Colors, Sizes } from '../../../configs';

export default {
  headerContainer: {
    height: 100,
    backgroundColor: Colors.main.primary,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerContent: {
    top: 0,
    height: 56,
    width: Sizes.screen.width,
    position: 'absolute',
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  headerFlexDirection: {
    flexDirection: 'row',
  },
  headerLeftText: {
    fontFamily: Sizes.fontFamily,
    fontSize: Sizes.text.m.size,
    color: Colors.main.secondary,
  },
  headerLeftIcon: {
    paddingLeft: 4,
    paddingTop: 4,
  },
  headerRightIcon: {
    position: 'absolute',
    right: 0,
    height: 56,
    justifyContent: 'center',
  },
  headerRightIconColor: {
    color: Colors.main.secondary,
  },
  buttonCenter: {
    flex: 1,
    marginTop: -24,
    height: 48,
    backgroundColor: '#3F51B5',
    borderRadius: 24,
    justifyContent: 'center',
  },
  buttonCenterText: {
    fontSize: Sizes.text.m.size - 2,
    textAlign: 'center',
    color: Colors.main.baseWhite,
  },
  emptyText: {
    fontSize: Sizes.text.m.size - 2,
    textAlign: 'center',
    color: Colors.main.inActive,
  },
  companyContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  padder: {
    paddingHorizontal: 36,
  },
  companyHeaderText: {
    marginTop: -10,
    fontSize: Sizes.text.m.size,
    fontFamily: Sizes.fontFamily,
  },
  companySlideIcon: {
    paddingTop: 2,
    alignItems: 'center',
    width: Sizes.screen.width - 32,
  },
  textFamily: {
    fontSize: Sizes.text.m.size,
  },
  listPaddingTop: {
    paddingTop: 16,
  },
  cardContainer: {
    flexDirection: 'column',
    height: 150,
    width: 300,
    borderRadius: 8,
  },
  contentCard: {
    flex: 1,
    margin: 12,
    borderRadius: 8,
  },
  titleCardText: {
    flex: 1,
  },
  imageCardContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    borderRadius: 8,
  },
  cardImage: {
    width: 80,
    height: 60,
    borderRadius: 8,
    marginRight: -8,
    marginBottom: -4,
  },
  emptyImage: {
    width: 250,
    height: 210,
    marginTop: -30,
    marginBottom: 16,
  },
  cardCurrContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardCurrMoney: {
    fontSize: 24,
    textAlign: 'right',
    paddingRight: 8,
  },
  cardCurrAccount: {
    color: Colors.main.inActive,
  },
  cardCurr: {
    fontSize: Sizes.text.m.size,
  },
  cardRegion: {
    marginTop: 8,
    height: Sizes.screen.width - 32,
    width: Sizes.screen.width - 32,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  padderRegion: {
    marginTop: 16,
  },
  cardTotal: {
    position: 'absolute',
    right: 16,
    bottom: 16,
  },
};

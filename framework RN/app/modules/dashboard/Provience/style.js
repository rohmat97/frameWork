import { Colors, Sizes } from '../../../configs';

export default {
  content: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  footer: {
    backgroundColor: Colors.main.transparent,
    marginBottom: 16,
    marginTop: 16,
  },
  footerTab: {
    backgroundColor: Colors.main.transparent,
    paddingHorizontal: 16,
  },
  button: {
    backgroundColor: Colors.main.primary,
    width: Sizes.screen.width,
  },
  text: {
    color: Colors.main.secondary,
    width: Sizes.screen.width - 8,
    textAlign: 'center',
    fontFamily: Sizes.fontFamily,
    fontSize: Sizes.text.s.size,
    letterSpacing: Sizes.text.m.line,
  },
};

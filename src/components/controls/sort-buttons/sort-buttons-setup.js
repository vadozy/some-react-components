import {
  faSortNumericDownAlt,
  faSortNumericUp,
  faSortAlphaDownAlt,
  faSortAlphaUp,
  faSortAmountDown,
  faSortAmountUpAlt,
  faArrowUp,
  faArrowDown,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SORT_BY = {
  VALUE: 'value',
  ALPHA: 'alpha',
  ALLOCATION: 'allocation',
  SELECTION: 'selection',
};

const VISIBLE_BUTTONS_COUNT = 2;

export const flipOrder = order => {
  if (order === 'desc') {
    return 'asc';
  } else {
    return 'desc';
  }
};

export const SORT_BUTTONS = [
  {
    key: 1, // read-only
    sortBy: SORT_BY.VALUE, // read-only
    active: false, // mutable
    order: 'desc', // mutable
    ix: 1, // mutable
    icon: null, // mutable
  },
  {
    key: 2,
    sortBy: SORT_BY.ALPHA,
    active: false,
    order: 'desc',
    ix: 2,
    icon: null,
  },
  {
    key: 3,
    sortBy: SORT_BY.ALLOCATION,
    active: false,
    order: 'desc',
    ix: 3,
    icon: null,
  },
  {
    key: 4,
    sortBy: SORT_BY.SELECTION,
    active: false,
    order: 'desc',
    ix: 4,
    icon: null,
  },
];

export const update = (buttons, sortBy, order) => {
  let activeIx = null;

  for (const button of buttons) {
    if (button.sortBy === sortBy) {
      button.active = true;
      button.order = order;
      activeIx = button.ix;
    } else {
      button.active = false;
    }
  }

  if (activeIx > VISIBLE_BUTTONS_COUNT) {
    // move ix=activeIx -> VISIBLE_BUTTON_MAX_IX
    // move ix=VISIBLE_BUTTON_MAX_IX down by 1
    // move ix=1 -> activeIx
    for (const button of buttons) {
      if (button.ix === activeIx) {
        button.ix = VISIBLE_BUTTONS_COUNT;
      } else if (button.ix === 1) {
        button.ix = activeIx;
      } else if (button.ix <= VISIBLE_BUTTONS_COUNT) {
        button.ix -= 1;
      }
    }
  }

  return updateIcons(buttons);
};

const updateIcons = buttons => {
  for (const button of buttons) {
    if (button.sortBy === SORT_BY.VALUE) {
      if (button.order === 'desc') {
        button.icon = <FontAwesomeIcon icon={faSortNumericDownAlt} />;
      } else {
        button.icon = <FontAwesomeIcon icon={faSortNumericUp} />;
      }
    } else if (button.sortBy === SORT_BY.ALPHA) {
      if (button.order === 'desc') {
        button.icon = <FontAwesomeIcon icon={faSortAlphaDownAlt} />;
      } else {
        button.icon = <FontAwesomeIcon icon={faSortAlphaUp} />;
      }
    } else if (button.sortBy === SORT_BY.ALLOCATION) {
      if (button.order === 'desc') {
        button.icon = <FontAwesomeIcon icon={faArrowDown} />;
      } else {
        button.icon = <FontAwesomeIcon icon={faArrowUp} />;
      }
    } else if (button.sortBy === SORT_BY.SELECTION) {
      if (button.order === 'desc') {
        button.icon = <FontAwesomeIcon icon={faSortAmountDown} />;
      } else {
        button.icon = <FontAwesomeIcon icon={faSortAmountUpAlt} />;
      }
    }
  }

  return buttons;
};

export const filterAndOrderVisibleButtons = buttons => {
  const orderedButtons = buttons.sort((b1, b2) => b1.ix - b2.ix);
  return orderedButtons.slice(0, VISIBLE_BUTTONS_COUNT);
};

export const deepCopyButtons = buttons => {
  const ret = [];
  for (const button of buttons) {
    ret.push({ ...button });
  }
  return ret;
};

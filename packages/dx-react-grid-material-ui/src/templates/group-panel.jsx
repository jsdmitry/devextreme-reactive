import React from 'react';
import PropTypes from 'prop-types';

import { withStyles, createStyleSheet } from 'material-ui/styles';

import { GroupPanelLayout } from '@devexpress/dx-react-grid';

const styleSheet = createStyleSheet('GroupPanel', theme => ({
  panel: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
  },
  groupInfo: {
    marginBottom: '12px',
    display: 'inline-block',
    color: theme.typography.title.color,
  },
}));

const DefaultTextBase = ({ classes }) => (
  <span className={classes.groupInfo}>
    Drag a column header here to group by that column
  </span>
);

DefaultTextBase.propTypes = {
  classes: PropTypes.shape().isRequired,
};

const DefaultText = withStyles(styleSheet)(DefaultTextBase);

const PanelTemplateBase = ({ classes, cells }) => (
  <div className={classes.panel}>
    {cells}
  </div>
);

PanelTemplateBase.propTypes = {
  classes: PropTypes.shape().isRequired,
  cells: PropTypes.arrayOf(PropTypes.node).isRequired,
};

const PanelTemplate = withStyles(styleSheet)(PanelTemplateBase);

const panelTemplate = props => <PanelTemplate {...props} />;

const GroupPanelBase = ({ groupByColumnText, classes, ...restProps }) => (
  <div className={classes.panel}>
    <GroupPanelLayout
      groupByColumnText={groupByColumnText || <DefaultText />}
      panelTemplate={panelTemplate}
      {...restProps}
    />
  </div>
);

GroupPanelBase.propTypes = {
  groupByColumnText: PropTypes.string,
  classes: PropTypes.object.isRequired,
};

GroupPanelBase.defaultProps = {
  groupByColumnText: undefined,
};

export const GroupPanel = withStyles(styleSheet)(GroupPanelBase);

import React from 'react';
import PropTypes from 'prop-types';
import { combineTemplates } from '@devexpress/dx-react-core';
import { TableFilterRow as TableFilterRowBase } from '@devexpress/dx-react-grid';
import { TableFilterCell } from '../templates/table-filter-cell';

const defaultFilterCellTemplate = props => <TableFilterCell {...props} />;

export const TableFilterRow = ({ filterCellTemplate, ...restProps }) => (
  <TableFilterRowBase
    filterCellTemplate={combineTemplates(
      filterCellTemplate,
      defaultFilterCellTemplate,
    )}
    {...restProps}
  />
);

TableFilterRow.propTypes = {
  filterCellTemplate: PropTypes.func,
};
TableFilterRow.defaultProps = {
  filterCellTemplate: undefined,
};

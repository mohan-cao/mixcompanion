import React from 'react';
import { Select, MenuItem, FormControl, InputLabel, Input, SvgIcon } from '@material-ui/core';

export default class GenreSelector extends React.PureComponent {
  render() {
    const { selectedGenre, availableGenres, onChange, onRefreshClicked, style } = this.props;
    return (
      <FormControl style={style}>
        <InputLabel shrink htmlFor="genre">
          <span>Genre</span>
          <div style={{ display: 'inline' }} onClick={() => onRefreshClicked()}><SvgIcon style={{ height: '0.9rem', fill: '#393' }} viewBox="0 0 24 24">
            <path d="M 9 3 C 8.448 3 8 3.448 8 4 C 8 4.552 8.448 5 9 5 L 18 5 C 18.552 5 19 5.448 19 6 L 19 15 L 17 15 C 16.596 15 16.231172 15.243188 16.076172 15.617188 C 16.025172 15.741187 16 15.871 16 16 C 16 16.26 16.101969 16.516031 16.292969 16.707031 L 19.292969 19.707031 C 19.683969 20.098031 20.317031 20.098031 20.707031 19.707031 L 23.707031 16.707031 C 23.993031 16.421031 24.077828 15.992188 23.923828 15.617188 C 23.768828 15.243187 23.404 15 23 15 L 21 15 L 21 6 C 21 4.343 19.657 3 18 3 L 9 3 z M 4 4 C 3.744125 4 3.4879687 4.0974687 3.2929688 4.2929688 L 0.29296875 7.2929688 C 0.00696875 7.5789687 -0.077828125 8.0078125 0.076171875 8.3828125 C 0.23117187 8.7568125 0.596 9 1 9 L 3 9 L 3 18 C 3 19.657 4.343 21 6 21 L 15 21 C 15.552 21 16 20.552 16 20 C 16 19.448 15.552 19 15 19 L 6 19 C 5.448 19 5 18.552 5 18 L 5 9 L 7 9 C 7.404 9 7.7688281 8.7568125 7.9238281 8.3828125 C 7.9748281 8.2588125 8 8.129 8 8 C 8 7.74 7.8980312 7.4839687 7.7070312 7.2929688 L 4.7070312 4.2929688 C 4.5115312 4.0974687 4.255875 4 4 4 z"/>
          </SvgIcon></div>
        </InputLabel>
        <Select
          style={{ minWidth: 70 }}
          multiple
          input={<Input name="genre" />}
          value={selectedGenre}
          onChange={(e) => onChange({ selectedGenre: e.target.value })}
        >
          {(availableGenres && availableGenres.length > 0 ?
            availableGenres.map((x) => <MenuItem key={x} value={x}>{x.replace(/-/g, ' ')}</MenuItem>) : <MenuItem>No genres available</MenuItem>)}
        </Select>
      </FormControl>
    );
  }
}

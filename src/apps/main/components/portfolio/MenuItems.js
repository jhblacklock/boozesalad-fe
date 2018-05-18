/* @flow */
import React from "react";
import { Icon } from "react-foundation";

type Props = {
  itemCount: number,
};

type State = {
  itemCount: number,
};

export default class MenuItems extends React.PureComponent {
  props: Props;
  state: State = {
    itemCount: this.props.itemCount,
  };

  componentWillReceiveProps(nextProps: Props) {
    this.setState({ itemCount: nextProps.itemCount });
  }

  render() {
    return (
      <div className="medium-12 cell">
        <div className="medium-12 cell">
          {Array.from(Array(this.state.itemCount), (_, i) => (
            <MenuItem key={i} i={i} setItemCount={this.setItemCount} />
          ))}
        </div>
        <div className="medium-12 cell align-center grid-x grid-padding-x align-middle padding-1">
          <button
            className="button secondary"
            onClick={e => this.addNewItemHandler(e)}
          >
            Add New Menu Item
          </button>
        </div>
      </div>
    );
  }

  setItemCount = () => {
    this.setState({ itemCount: this.state.itemCount - 1 });
  };

  addNewItemHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    const { itemCount } = this.state;
    this.setState({ itemCount: itemCount + 1 });
  };
}

const MenuItem = (props: { i: string, setItemCount: Function }) => {
  return (
    <div className="medium-12 cell padding-vertical-1 border-bottom">
      <div className="align-justify grid-x grid-padding-x padding-vertical-1">
        <span className="h6">Menu Item {props.i}</span>
        <div>
          <span className="padding-right-1">
            <Icon prefix="fi" name="thumbnails" />
          </span>
          <span onClick={props.setItemCount}>
            <Icon prefix="fi" name="x" />
          </span>
        </div>
      </div>
      <div className="medium-12 cell">
        <label htmlFor="">Menu Item</label>
        <input type="text" />
      </div>
      <div className="medium-12 cell">
        <label htmlFor="">Menu Item descripton</label>
        <textarea />
      </div>
    </div>
  );
};

import * as React from "react";
import {
  PropertyControls,
  ControlType,
  Frame,
  Animatable,
  animate
} from "framer";

const overwriteProperties: React.CSSProperties = {};

// Define type of property
interface Props {
  text: string;
}
const style: React.CSSProperties = {
  backgroundColor: "rgba(255,255,255,0)",
  
  overflow: "hidden"
};

export class TabsComponent extends React.Component<Props> {
  container;
  containerOptions;
  options;
  menu;

  constructor(props) {
    super(props);
    this.updateElements(props);
    this.buildMenu(props);
  }

  // Set default properties
  static defaultProps = {
    tabs: 3,
    menu1: "Example",
    menu2: "Example 2",
    menu3: "Example 3",
    menu4: "",
    menu5: "",
    menu6: "",
    alignMenu: "space-around",
    borderColor: "rgba(0,0,0,.6)",
    TextColor: "rgba(0,0,0,.6)",
  };

  // Items shown in property panel
  static propertyControls: PropertyControls = {
    tabs: { type: ControlType.Number, title: "Tabs" },
    borderColor: { type: ControlType.Color, title: "Border color"},
    TextColor: { type: ControlType.Color, title: "Text color"},
    menu1: {
      type: ControlType.String,
      title: "Menu 1",
      placeholder: "My menú"
    },
    menu2: {
      type: ControlType.String,
      title: "Menu 2",
      placeholder: "My menú"
    },
    menu3: {
      type: ControlType.String,
      title: "Menu 3",
      placeholder: "My menú"
    },
    menu4: {
      type: ControlType.String,
      title: "Menu 4",
      placeholder: "My menú"
    },
    menu5: {
      type: ControlType.String,
      title: "Menu 5",
      placeholder: "My menú"
    },
    menu6: {
      type: ControlType.String,
      title: "Menu 6",
      placeholder: "My menú"
    },
    alignMenu: {
      type: ControlType.Enum,
      options: [
        "flex-start",
        "flex-end",
        "center",
        "space-around",
        "space-between"
      ],
      optionTitles: [
        "flex-start",
        "flex-end",
        "center",
        "space-around",
        "space-between"
      ],
      title: "Align menu"
    }
  };

  componentWillReceiveProps(nextProps) {
    this.updateElements(nextProps);
    this.buildMenu(nextProps);
  }

  buildMenu(props) {
    const { menu1, menu2, menu3, menu4, menu5, menu6 } = props;
    this.menu = [];
    this.menu.push(menu1,menu2,menu3,menu4,menu5,menu6);

  }

  updateElements(props) {
    const { borderColor, TextColor, alignMenu } = props;
    this.container = {
      height: "100%",
      width: "100%",
      borderWidth: 1,
      borderStyle: "solid",
      borderRadius: '20px',
      borderColor: borderColor,
    }
    this.containerOptions = {
      width: "100%",
      display: "flex",
      justifyContent: alignMenu
    };

    this.options = {
      padding:'10px',
      color: TextColor
     
    };
  }

  render() {
    const { width, height } = this.props;
    return (
      <Frame width={width} height={height} style={style}>
        <div style={this.container}>
          <div style={this.containerOptions}>
           
            { this.menu.map((item,index) => {
              if(item!=='') return <div style={this.options}>{item}</div>
              
               }) 
           }
        
          </div>
        </div>
      </Frame>
    );
  }
}

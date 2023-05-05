import React from "react";
import RepairReuse from "../ReusableComponent/RepairReuse/RepairReuse";
import "./CustomProject.css";

function CustomProject() {
  return (
    <div className="building-wrapper">
      <RepairReuse
        title="Building Construction"
        description="Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum."
        button1Text="GET A QUOTE"
        button1BgColor="#2A2A2A"
        button2Text="LEARN MORE"
        button2BgColor="#FFB400"
        className="building-flex"
      />
      <RepairReuse
        title="Repairs & Installations"
        description="Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum."
        button1Text="GET A QUOTE"
        button1BgColor="#2A2A2A"
        button2Text="LEARN MORE"
        button2BgColor="#FFB400"
        className="install-flex"
      />

      <RepairReuse
        title="Custom Design Projects"
        description="Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum."
        button1Text="GET A QUOTE"
        button1BgColor="#2A2A2A"
        button2Text="LEARN MORE"
        button2BgColor="#FFB400"
        className="building-flex"
      />
    </div>
  );
}

export default CustomProject;

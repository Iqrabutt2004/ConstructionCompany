import React from "react";
import RepairReuse from "../ReusableComponent/RepairReuse/RepairReuse";
import "./CustomProject.css";

function CustomProject() {
  return (
    <div>
      <div className="">
        <RepairReuse
          title="Building Construction"
          description="Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum."
          button1Text="GET A QUOTE"
          button1BgColor="#2A2A2A"
          button2Text="LEARN MORE"
          button2BgColor="#FFB400"
          className="float-repair"
        />
      </div>
      <div className="float-repair-two ">
        <div className="float-repair-two d-flex">
          <RepairReuse
            title="Repairs & Installations"
            description="Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum."
            button1Text="GET A QUOTE"
            button1BgColor="#2A2A2A"
            button2Text="LEARN MORE"
            button2BgColor="#FFB400"
            className=""
          />
        </div>
      </div>
      <div className="pb-5">
        <RepairReuse
          title="Custom Design Projects"
          description="Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum."
          button1Text="GET A QUOTE"
          button1BgColor="#2A2A2A"
          button2Text="LEARN MORE"
          button2BgColor="#FFB400"
          className="float-repair"
        />
      </div>
    </div>
  );
}

export default CustomProject;

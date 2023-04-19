import React from 'react'
import RepairReuse from "../../components/RepairReuse/RepairReuse"
import "./CustomProject.css";
function CustomProject() {
  return (
    <section className="py-5">
      <div className='py-5'>
        <RepairReuse
          title="Building Construction"
          description="Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum."
          button1Text="LEARN MORE"
          button1BgColor="#2A2A2A"
          button2Text="LEARN MORE"
          button2BgColor="#FFB400"
          className="float-repair"
        />
      </div>
      <div className=" float-repair-2 py-5">
        <div className=" float-repair-2 d-flex">
          <RepairReuse
            title="Repairs & Installations"
            description="Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum."
            button1Text="LEARN MORE"
            button1BgColor="#2A2A2A"
            button2Text="LEARN MORE"
            button2BgColor="#FFB400"
            className=""
          />
        </div>
      </div>
      <div className='py-5'>
        <RepairReuse
          title="Custom Design Projects"
          description="Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum."
          button1Text="LEARN MORE"
          button1BgColor="#2A2A2A"
          button2Text="LEARN MORE"
          button2BgColor="#FFB400"
          className="float-repair"
        />
      </div>
    </section>
  );
}

export default CustomProject

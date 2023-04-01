import React from "react";
import stlSkill from "./Skill.module.css";


export default function Profile() {
    return (
        <div className={stlSkill.containerSkills}>
            <div className={stlSkill.skillBx}>
                <span className={stlSkill.title}>HTML</span>
                <div className={stlSkill.skillBar}>
                    <span className={stlSkill.skillPer.html}></span>
                    <span className={stlSkill.tooltip}>90%</span>
                </div>
            </div>
            <div className={stlSkill.skillBx}>
                <span className={stlSkill.title}>CSS</span>
                <div className={stlSkill.skillBar}>
                    <span className={stlSkill.skillPer.css}></span>
                    <span className={stlSkill.tooltip}>70%</span>
                </div>
            </div>
            <div className={stlSkill.skillBx}>
                <span className={stlSkill.title}>JavaScript</span>
                <div className={stlSkill.skillBar}>
                    <span className={stlSkill.skillPer.js}></span>
                    <span className={stlSkill.tooltip}>50%</span>
                </div>
            </div>
            <div className={stlSkill.skillBx}>
                <span className={stlSkill.title}>NodeJS</span>
                <div className={stlSkill.skillBar}>
                    <span className={stlSkill.skillPer.node}></span>
                    <span className={stlSkill.tooltip}>30%</span>
                </div>
            </div>
        </div>
    );
}
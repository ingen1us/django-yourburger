import React, { useState } from "react";

import { useForm } from "react-hook-form";

import { Table } from "./Table/Table";
import { Input } from "./Form/Input";
import { Button } from "./Form/Button";
import { Select } from "./Form/Select";
import { Switch } from "./Form/Switch";

export const ModalSale = (props) => {
    const { title, fields, onClose, buttonSubmit, dataSelect, nameSelect, submit } = props
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <div>
            <div className="modal is-active">
                <form onSubmit={handleSubmit(submit)} encType="multipart/form-data">
                    <div className="modal-background"></div>
                    <div className="modal-card">
                        <header className="modal-card-head">
                            <p className="modal-card-title">{title}</p>
                            <button
                                className="delete"
                                aria-label="close"
                                name="new"
                                type="button"
                                onClick={onClose}
                            ></button>
                        </header>
                        <section className="modal-card-body">
                            <div className="container">
                                <div className="columns is-multiline">
                                    {fields.map((field, index) => (
                                        <div className={`column is-${field.col}`} key={index}>
                                            <div className="field is-vertical">
                                                <div className="field-label" style={{ marginRight: 0 }}>
                                                    <label className="label has-text-centered">
                                                        {field.title}
                                                    </label>
                                                </div>
                                                <div className="field-body">
                                                    <div className="field">
                                                        <div className="control has-icons-left">
                                                            {field.type === 'list' ? (
                                                                <div>
                                                                    {console.log(field.key)}
                                                                    <Table
                                                                        columns={field.columns}
                                                                        headers={field.headers}
                                                                        data={field.data}
                                                                    />
                                                                </div>
                                                            ) : (

                                                                <div>
                                                                    {/* {console.log(field)} */}
                                                                    <Select
                                                                        action={{ ...register(field.name) }}
                                                                        fields={dataSelect}
                                                                        name={nameSelect}
                                                                        defaultValue={field.value}
                                                                        customOptions={field.customOptions}
                                                                        nameSelect={field.nameSelect}
                                                                    />
                                                                </div>
                                                            )}
                                                            <span className="icon is-small is-left">
                                                                <i className={`fas fa-${field.icon}`}></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <footer className="modal-card-foot">
                            <Button
                                text="Cancelar"
                                color="primary"
                                action={onClose}
                                type="button"
                            />
                            {buttonSubmit && <Button text="Confirmar" color="success" type="submit" />}
                        </footer>
                        <div className="notifications">
                            {Object.keys(errors).length > 0 && (
                                <div className="notification has-text-centered is-primary mt-5">
                                    <b>Rellene todos los campos</b>
                                </div>
                            )}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};


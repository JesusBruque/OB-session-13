import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import './formFormik.css';

//Models
import { Task } from './models/task.class';
import { LEVELS } from './models/levels.enum';


const FormFormik = () => {

    let task = new Task();

    const initialValues = {
        title: '',
        description: '',
        completed: false,
        level: LEVELS.NORMAL,
    }

    const createSchema = Yup.object().shape(
        {
            title: Yup.string()
                .required('Title is required'),
            description: Yup.string()
                .max(20, 'Too long'),
            completed: Yup.boolean(),
            level: Yup.object()
        }
    )

    return (
        <div>
            <h4>Create Task</h4>
            <Formik
                initialValues={initialValues}
                validationSchema={createSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >

                {
                    props => {
                        const {
                            values,
                            touched,
                            errors,
                            isSubmitting,
                            handleChange,
                            handleBlur
                        } = props;

                        return (
                            <Form>
                                <label htmlFor="title">Title</label>
                                <Field id="title" name="title" placeholder="Title" />

                                {
                                    errors.title && touched.title && 
                                    (
                                        <div className='error'>
                                            <p>{errors.title}</p>
                                        </div>
                                    )
                                }

                                <label htmlFor="description">Description</label>
                                <Field id="description" name="description" placeholder="Description" />

                                {
                                    errors.description && touched.description && 
                                    (
                                        <div className='error'>
                                            <p>{errors.description}</p>
                                        </div>
                                    )
                                }

                                <label htmlFor="level">Level</label>
                                <label>
                                    <Field type="radio" name="level" value="normal" />
                                    Normal
                                </label>
                                <label>
                                    <Field type="radio" name="level" value="urgent" />
                                    Urgent
                                </label>
                                <label>
                                    <Field type="radio" name="level" value="priority" />
                                    Priority
                                </label>
                                <button type="submit">Submit</button>
                            </Form>
                        )
                    }
                }
            </Formik>
        </div>
    );
};


FormFormik.propTypes = {

};


export default FormFormik;

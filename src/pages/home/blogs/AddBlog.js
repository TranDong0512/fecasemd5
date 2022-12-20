import React from 'react';
import {Outlet} from "react-router-dom";

function AddBlog(props) {
    return (
        <>
            <section className="content">
                <div className="row">
                    <div className="col-10 offset-1">
                        <div className="box box-primary">
                            <div className="box-header with-border">
                                <h3 className="box-title">
                                    Create New Blog
                                </h3>
                            </div>
                            <form method="POST" action="/admin/posts/store" role="form" className="form-element"
                                  id="create-post">
                                <div className="box-body">
                                    <div className="form-group">
                                        <label htmlFor="name">
                                            Title
                                        </label>
                                        <input className="form-control" type="text" name="title" id="title"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">
                                            Content</label>
                                        <textarea className="form-control" name="content" id="content">
                                               </textarea>
                                    </div>
                                </div>
                                <div className="box-footer text-right">
                                    <button type="submit" className="btn btn-lg btn-warning">
                                        Save
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}
export default AddBlog



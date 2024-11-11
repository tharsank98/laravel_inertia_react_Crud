import {Head, useForm } from '@inertiajs/react'

export default function Create() {
    const { data, setData, post, errors, processing } = useForm({
        body: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/post');
    };

    //console.log(errors);

    return (
        <>
        <Head title="Create"/>
            <h1 className="title">Create a new Post</h1>

            <div className="w-1/2 mx-auto">
                <form onSubmit={handleSubmit}>
                    <textarea
                        rows="10"
                        value={data.body}
                        onChange={(e) => setData('body', e.target.value)}
                        className={errors.body && '!ring-red-500'}
                    ></textarea>
                    {errors.body && <div className="error">{errors.body}</div>}
                    <button type="submit" className="primary-btn mt-4" disabled={processing}>
                        {processing ? 'Creating...' : 'Create Post'}
                    </button>
                </form>
            </div>
        </>
    );
}

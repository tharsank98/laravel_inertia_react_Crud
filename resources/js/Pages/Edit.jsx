import {Head, useForm } from '@inertiajs/react'
import { useRoute } from '../../../vendor/tightenco/ziggy';


export default function Create({post}) {
    const { data, setData, put, errors, processing } = useForm({
        body: post.body,
    });
    const route = useRoute();

    const handleSubmit = (e) => {
        e.preventDefault();
       // put(`/post/${post.id}`);
        put(route('post.update',post));
    };

    //console.log(errors);

    return (
        <>
        <Head title="Edit"/>
            <h1 className="title">Update your Post</h1>

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
                        {processing ? 'Updating...' : 'Update Post'}
                    </button>
                </form>
            </div>
        </>
    );
}

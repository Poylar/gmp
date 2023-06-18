import clsx from 'clsx';
import ky from 'ky';

import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

const Form = ({ data }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (formData) => {
    ky.post('https://gmp.einzelwerk.io/assets/components/fetchit/action.php', {
      json: {
        action: data.form.config.action,
        formData,
      },
    })
      .json()
      .then((res) => {
        router.push(res.data.redirectTo);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <section className='section section--md'>
      <div className='container'>
        <h2 className='text-3xl md:text-6xl text-center font-medium mb-8 md:mb-14'>{data.title}</h2>
        <div className='max-w-3xl mx-auto'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='grid md:grid-cols-2 gap-4'>
              {data.form.fields.map((field, index) => {
                switch (field.type) {
                  case 'select':
                    const values = field.value.split('||');
                    return (
                      <div key={index} className='flex flex-col gap-1 md:col-span-2 '>
                        <label htmlFor={field.name}>
                          <select
                            name={field.name}
                            id={field.name}
                            {...register(field.name, {
                              required: field.required && `${field.placeholder} is required`,
                            })}
                            className={clsx(
                              'w-full h-full py-[14px] px-5 transition-colors text-gray-400 bg-white rounded-2xl border border-gray-200 hover:border-gray-400',
                              errors[field.name] && 'border-red-500'
                            )}
                          >
                            <option value='' className='hidden' disabled selected>
                              {field.placeholder}
                            </option>
                            {values.map((value) => {
                              return (
                                <option className='checked:hidden' value={value.split('==')[1]}>
                                  {value.split('==')[0]}
                                </option>
                              );
                            })}
                          </select>
                        </label>
                        {errors[field.name] && <span className='px-5 text-red-500 text-xs'>{errors[field.name].message}</span>}
                      </div>
                    );
                  case 'textarea':
                    return (
                      <div key={index} className='flex flex-col gap-1 md:col-span-2 '>
                        <label htmlFor={field.name}>
                          <textarea
                            name={field.name}
                            id={field.name}
                            {...register(field.name, {
                              required: field.required && `${field.placeholder} is required`,
                            })}
                            placeholder={field.placeholder}
                            className={clsx(
                              'w-full  py-[14px] px-5 h-32 transition-colors placeholder:text-gray-400 text-gray-950 bg-white rounded-2xl border border-gray-200 hover:border-gray-400',
                              errors[field.name] && 'border-red-500'
                            )}
                          ></textarea>
                        </label>
                        {errors[field.name] && <span className='px-5 text-red-500 text-xs'>{errors[field.name].message}</span>}
                      </div>
                    );
                  case 'checkbox':
                    return (
                      <div key={index} className='flex flex-col gap-1 mt-2 md:col-span-2 '>
                        <div className='inline-flex gap-2 flex-wrap'>
                          <label htmlFor={field.name} className='inline-flex gap-4 flex-wrap'>
                            <input
                              id={field.name}
                              className={clsx('sr-only peer', errors[field.name] && 'border-red-500')}
                              checked={watch(field.name)}
                              placeholder={field.placeholder}
                              type={field.type}
                              {...register(field.name, {
                                checked: true,
                                required: field.required && `${field.placeholder} is required`,
                              })}
                            />
                            <span className='w-6 h-6 block rounded-md border peer-checked:border-blue-600 peer-checked:bg-white peer-checked:bg-checked'></span>
                            <span className='text-gray-700'>{field.label}</span>
                          </label>
                          <div className='text-blue-600 link-hover' dangerouslySetInnerHTML={{ __html: field.content }} />
                        </div>
                        {errors[field.name] && <span className='px-5 text-red-500 text-xs'>{errors[field.name].message}</span>}
                      </div>
                    );
                  default:
                    return (
                      <div key={index} className='flex flex-col gap-1'>
                        <label htmlFor={field.name}>
                          <input
                            id={field.name}
                            className={clsx(
                              'w-full h-full py-4 px-5 transition-colors placeholder:text-gray-400 text-gray-950 bg-white rounded-2xl border border-gray-200 hover:border-gray-400',
                              errors[field.name] && 'border-red-500'
                            )}
                            placeholder={field.placeholder}
                            type={field.type}
                            {...register(field.name, {
                              required: field.required && `${field.placeholder} is required`,
                            })}
                          />
                        </label>
                        {errors[field.name] && <span className='px-5 text-red-500 text-xs'>{errors[field.name].message}</span>}
                      </div>
                    );
                }
              })}

              <button className='btn btn--primary md:col-span-2 mt-5 py-5 text-lg'>{data.form.submit}</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;

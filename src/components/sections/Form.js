import clsx from 'clsx';
import { useRef } from 'react';

import { useRouter } from 'next/router';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';

const Form = ({ data }) => {
  const router = useRouter();
  const ref = useRef(null);

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (formData) => {
    const body = new FormData(ref.current);
    body.append('action', data.form.config.action);

    fetch(
      new Request(data.form.config.actionUrl, {
        method: 'post',
        headers: {
          Accept: 'application/json',
        },
      }),
      {
        body: body,
      }
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (response.success) {
          router.push('/success');
        } else {
          alert(response.message);
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <section className='section section--md qwe' id='form'>
      <div className='container'>
        <h2 className='text-3xl md:text-6xl text-center font-medium mb-8 md:mb-14'>{data.title}</h2>
        <div className='max-w-3xl mx-auto'>
          <form ref={ref} onSubmit={handleSubmit(onSubmit)}>
            <input type='hidden' name={`formit-${data.form.form_id}`} value='1' />
            <div className='grid md:grid-cols-2 gap-4'>
              {data.form.fields.map((input, index) => {
                switch (input.type) {
                  case 'select':
                    const values = input.value.split('||');
                    return (
                      <div key={index} className='flex flex-col  gap-1 col-span-2 '>
                        <label htmlFor={input.name}>
                          <Controller
                            control={control}
                            name={input.name}
                            render={({ field }) => (
                              <Select
                                {...register(input.name, { required: input.required && input?.errortext })}
                                isSearchable={false}
                                name={input.name}
                                classNames={{
                                  container: () => '!w-full !leading-none',
                                  indicatorSeparator: () => '!hidden',
                                  valueContainer: () => '!m-0 !p-0',
                                  input: (base) => '!m-0 !p-0',
                                  placeholder: (base) => '!m-0 !p-0',
                                  dropdownIndicator: (base) => '!m-0 !p-0',
                                  singleValue: (base, isSelected) =>
                                    clsx({
                                      '!text-gray-400': !isSelected,
                                      '!text-gray-900': isSelected,
                                    }),
                                  control: (base) =>
                                    clsx(
                                      base,
                                      '!w-full !h-full !py-4 !px-5 !transition-colors !bg-white !rounded-2xl !border !border-gray-200 !hover:border-gray-400'
                                    ),
                                }}
                                placeholder={`${input.placeholder}`}
                                options={values.map((value) => {
                                  return {
                                    value: value.split('==')[1],
                                    label: value.split('==')[0],
                                  };
                                })}
                                value={values.find((c) => c.value === input.value)}
                                onChange={(val) => field.onChange(val.value)}
                              />
                            )}
                          />
                        </label>
                        {errors[input.name] && <span className='px-5 text-red-500 text-xs'>{errors[input.name].message}</span>}
                      </div>
                    );
                  case 'textarea':
                    return (
                      <div key={index} className='flex flex-col gap-1 col-span-2 '>
                        <label htmlFor={input.name}>
                          <textarea
                            name={input.name}
                            id={input.name}
                            {...register(input.name, {
                              required: input.required && input?.errortext,
                            })}
                            placeholder={input.placeholder}
                            className={clsx(
                              'w-full  py-[14px] px-5 h-32 transition-colors placeholder:text-gray-400 text-gray-950 bg-white rounded-2xl border border-gray-200 hover:border-gray-400',
                              errors[input.name] && 'border-red-500'
                            )}
                          ></textarea>
                        </label>
                        {errors[input.name] && <span className='px-5 text-red-500 text-xs'>{errors[input.name].message}</span>}
                      </div>
                    );
                  case 'checkbox':
                    return (
                      <div key={index} className='flex flex-col gap-1 mt-2 col-span-2 '>
                        <div className='inline-flex gap-2 flex-wrap'>
                          <label htmlFor={input.name} className='inline-flex gap-4 flex-wrap'>
                            <input
                              id={input.name}
                              className={clsx('sr-only peer', errors[input.name] && 'border-red-500')}
                              checked={watch(input.name)}
                              placeholder={input.placeholder}
                              type={input.type}
                              {...register(input.name, {
                                checked: true,
                                required: (input.required && input?.errortext) || 'required',
                              })}
                            />
                            <span className='w-6 h-6 block rounded-md border peer-checked:border-blue-600 peer-checked:bg-white peer-checked:bg-checked'></span>
                            <span className='text-gray-700'>{input.label}</span>
                          </label>
                          <div className='text-blue-600 link-hover' dangerouslySetInnerHTML={{ __html: input.content }} />
                        </div>
                        {errors[input.name] && <span className='px-5 text-red-500 text-xs'>{errors[input.name].message}</span>}
                      </div>
                    );
                  default:
                    return (
                      <div key={index} className={clsx('flex flex-col gap-1 max-md:col-span-2', input.name === 'subject' ? 'col-span-2' : '')}>
                        <label htmlFor={input.name}>
                          <input
                            id={input.name}
                            className={clsx(
                              'w-full h-full py-4 px-5 transition-colors placeholder:text-gray-400 text-gray-950 bg-white rounded-2xl border border-gray-200 hover:border-gray-400',
                              errors[input.name] && 'border-red-500'
                            )}
                            placeholder={input.placeholder}
                            type={input.type}
                            {...register(input.name, {
                              required: input.required && input?.errortext,
                            })}
                          />
                        </label>
                        {errors[input.name] && <span className='px-5 text-red-500 text-xs'>{errors[input.name].message}</span>}
                      </div>
                    );
                }
              })}

              <button className='btn btn--primary col-span-2 mt-5 py-5 text-lg'>{data.form.submit}</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;

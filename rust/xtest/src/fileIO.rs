use std::fs::File;
use std::io::ErrorKind;

pub(crate) fn open_file(filename:String)
{
    let f = File::open(&filename);
    let f = match f {
        Ok(file) => file,

        Err(err) => match err.kind() {
            ErrorKind::NotFound => match  File::create(filename)
            {
                Ok(file) => file,
                Err(error) => panic!("{:?}",err),
            },
            other_error => panic!("{:?}",err),
        },

    };
}
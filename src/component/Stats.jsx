import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
import { animate } from "framer-motion";
function Stats() {
    const count1 = useMotionValue(0);
    const count2 = useMotionValue(0);
    const count3 = useMotionValue(0);
    const rounded1 = useTransform(count1, latest => `${Math.round(latest)}+`);
    const rounded2 = useTransform(count2, latest => `${Math.round(latest)}+`);
    const rounded3 = useTransform(count3, latest => `${Math.round(latest)}+`);

    useEffect(() => {
        const controls1 = animateCount1();
        const controls2 = animateCount2();
        const controls3 = animateCount3();

        return () => {
            controls1.stop();
            controls2.stop();
            controls3.stop();
        };
    }, []);

    const animateCount1 = () => {
        return animate(count1, 20000, {
            duration: 1.2,
        });
    };
    const animateCount2 = () => {
        return animate(count2, 12000, {
            duration: 1.4,
        });
    };
    const animateCount3 = () => {
        return animate(count3, 5000, {
            duration: 1.6,
        });
    };

    return (

        <section className='bg-[#7f5539] text-white flex justify-evenly p-4'>
            <div className=' flex flex-col justify-center items-center'>
                <motion.div className='text-4xl font-semibold'>{rounded1}</motion.div>

                {/* <h1 className='text-4xl font-semibold'>20,000+</h1> */}
                <p className='text-2xl font-bold'>Orders</p>
            </div>
            <div className=' flex flex-col justify-center items-center'>
                <motion.div className='text-4xl font-semibold'>{rounded2}</motion.div>
                {/* <h1 className='text-4xl font-semibold'>12,000+</h1> */}
                <p className='text-2xl font-bold'>Happy customers</p>
            </div>
            <div className=' flex flex-col justify-center items-center'>
                <motion.div className='text-4xl font-semibold'>{rounded3}</motion.div>
                {/* <h1 className='text-4xl font-semibold'>5,000+</h1> */}
                <p className='text-2xl font-bold'>Reservations</p>
            </div>
        </section>
    );
}

export default Stats;

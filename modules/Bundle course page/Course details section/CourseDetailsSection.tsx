import React, { memo } from 'react';
import styles from "./course-details-section.module.css";

function CourseDetailsSection() {
    return (
        <div className={styles["course-details-section"]}>
            <h2 className={styles["course-details-section__title"]}>تفاصيل الباقة</h2>
            <p className={styles["course-details-section__para"]}
            // dangerouslySetInnerHTML={{ __html: courseDetailsData.data?.course_details?.description }}
            >
                تقدم لك منصة تدرب الإلكترونية دورة أسراري في التربية، بإِشراف الأستاذة عفاف محمد الجاسم، وهي المؤسس والرئيس التنفيذي لشركة إنسان للاستشارات والتدريب، خبرة أكثر من 30 عاماً في مجال الاستشارات الاجتماعية والتدريب. مدربة مدربين فئة A والمشرف العام لنادي إنسان للمدربين، وهي مستشار تدريب في معهد وليام جلاسر الدولي لنظرية الاختيار والعلاج الواقعي وعضو مجلس إدارة في جمعية الخدمة الاجتماعية الكويتية. بالإضافة إلى كونها عضو المجلس الاستشاري للجنة الطبية في جمعية صندوق إعانة المرضى وعضو مؤسس في جمعية الاختيار الكويتية. مقيم داخلي ومحكم دولي معتمد من المؤسسة الأوروبية لإدارة الجودة EFQM، وعضو في الجمعية البريطانية للتنويم الايحائي العلاجي UK Guild منذ عام 2000.
            </p>
            <input type="checkbox" className={styles["course-details-section__expand-collapse-btn"]} />
        </div>
    )
}

export default memo(CourseDetailsSection);

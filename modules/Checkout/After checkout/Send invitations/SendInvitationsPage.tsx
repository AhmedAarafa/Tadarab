/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';
import styles from './send-invitations-page.module.css';

export default function SendInvitationsPage() {
  return (
    <Row className={styles['send-invitations']}>
      <Col xs={12}>

        <div className={styles['send-invitations-outercard']}>

          <div className={styles['send-invitations-outercard__title-box']}>
            <img src="/images/Invitations.png" alt="ارسل دعوة" />
            <div className={styles['send-invitations-outercard__title-box__title']}>
              <div> لديك 3 دعوات لأصدقائك </div>
              <div> صالحة لمدة 28 يوم </div>
            </div>
          </div>

          <div className={styles['send-invitations-outercard__inner-card']}>

            <div>
              <div> دعوة صديق </div>
              <div> إلى تدرب بلا حدود </div>
            </div>

            <div>
              قم بدعوة أصدقائك لتجربة تدرب بلا حدود مجاناً لمدة أسبوع كامل
            </div>

            <Form>
              <label htmlFor="send-sub-invite">
                البريد الإلكتروني
              </label>
              <input type="email" name="send-sub-invite" placeholder="ادخل بريدك الالكتروني..." />
            </Form>

            <Button>
              إرسال الدعوة
            </Button>

          </div>

        </div>

      </Col>
    </Row>
  )
}
